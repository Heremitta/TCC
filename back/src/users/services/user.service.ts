import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import {Op} from 'sequelize'
import { Login } from '../models/login.model';
import { user } from '../models/user.model';
import { TypeUser } from '../models/typeUser.model';
import { GeradorUuidService } from '../../@core/services/geradoruuid.service';
import { TokenService } from './token.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => GeradorUuidService))
    private _geradorUUID: GeradorUuidService,
    private _tokenService: TokenService,
    @InjectModel(TypeUser) private _type: typeof TypeUser,
    @InjectModel(Login) private _login: typeof Login,
    @InjectModel(user) public userModel: typeof user,
  ) {}

  async getAll(): Promise<user[]> {
    return await this.userModel.findAll();
  }
  async getOne(id: string): Promise<any> {
    return await this.userModel.findByPk(id);
  }
  async get(id: string): Promise<any> {
    const user = await this.userModel.findByPk(id);
    const type = await this._type.findByPk(user.typeId, {
      attributes: ['id', 'description', 'active'],
    });
    const token = this._tokenService.signToken({ userId: user.id });
    const res = {
      login: {
        userId: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        user: {
          nickName: user.nickName,
          name: user.name,
          email: user.email,
          phone: user.phone,
          active: user.active,
          avatar: user.avatar ? user.avatar : '',
          user_type: {
            id: type.id,
            description: type.description,
            active: type.active,
          },
        },
      },
      token,
    };
    return res;
  }

  async newUser(user: user): Promise<any> {
    let uuid = this._geradorUUID.uuidv4();

    const exists = await this.userModel.findOne({
      where: {
        email: user.email,
      },
    });
    if (exists) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'User has already been registered',
        },
        HttpStatus.CONFLICT,
      );
    }

    let uuidExists = await this.userModel.findOne({
      where: {
        id: uuid,
      },
    });
    //MAKE BETTER, create new table with all uuid's used
    while (uuidExists) {
      uuid = this._geradorUUID.uuidv4();
      uuidExists = await this.userModel.findOne({
        where: {
          id: uuid,
        },
      });
    }

    user.id = uuid;

    user.password = await hash(user.password, 10);

    const newUser = await this.userModel.create(user);
    const login = {
      id: uuid,
      email: user.email,
      password: user.password,
      userId: newUser.id,
    };

    const type = await this._type.findByPk(user.typeId, {
      attributes: ['id', 'description', 'active'],
    });

    await this._login.create(login);

    const token = this._tokenService.signToken({ userId: newUser.id });
    return {
      login: {
        userId: newUser.id,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
        user: {
          nickName: newUser.nickName,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          active: newUser.active,
          user_type: {
            id: type.id,
            description: type.description,
            active: type.active,
          },
        },
      },
      token,
    };
  }

  async updateUser(user): Promise<[number, user[]]> {
    return this.userModel.update(user, {
      where: {
        id: user.id,
      },
    });
  }

  async deleteUser(id) {
    const user = await this.userModel.findByPk(id);
    return user?.id
      ? (async () => {
          await this._login.destroy({
            where: {
              userId: id,
            },
          });
          await this.userModel.destroy({
            where: {
              id: id,
            },
          });
          return { message: `Deleted user id: ${user.id}`, cod: 410 };
        })()
      : `Not user with id '${id}'`;
  }

  //
  async userAndType(): Promise<{ users: user[]; types: TypeUser[] }> {
    const users: user[] = await this.getAll();
    const types: TypeUser[] = await this._type.findAll();
    return { users, types };
  }
}
