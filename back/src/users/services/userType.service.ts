import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoggerService } from 'src/@core/services/logger.service';
import { TypeUser } from '../models/typeUser.model';
import { GeradorUuidService } from '../../@core/services/geradoruuid.service';

@Injectable()
export class UserTypeService {
  constructor(
    private _logger: LoggerService,
    private _geradorUUID: GeradorUuidService,
    @InjectModel(TypeUser)
    private _userModel: typeof TypeUser,
  ) {}

  async getAll(): Promise<TypeUser[]> {
    return await this._userModel.findAll();
  }
  async get(id): Promise<TypeUser> {
    return await this._userModel.findByPk(id);
  }
  async newUserType(type) {
    const uuid = this._geradorUUID.uuidv4();
    type.id = uuid;
    const user_type = await this._userModel.create(type);
    this._logger.infoLog(`New user type id ${type.id}`);
    return user_type;
  }
  async updateUser(user): Promise<[number, TypeUser[]]> {
    const result = this._userModel.update(user, {
      where: {
        id: user.id,
      },
    });
    this._logger.infoLog(`User type id ${user.id} was deleted!`);
    return result;
  }
  async deleteUser(id) {
    const user: TypeUser = await this.get(id);
    const result = user?.destroy()
      ? (() => {
          user.destroy();
          return { message: `Deleted user type id: ${user.id}`, cod: 410 };
        })()
      : `Not user type with id '${id}'`;
    this._logger.infoLog(result);
    return result;
  }
}
