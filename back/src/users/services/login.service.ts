import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Login } from '../models/login.model';
import { user } from '../models/user.model';
import { TypeUser } from '../models/typeUser.model';
import { TokenService } from './token.service';
import { hash, compare } from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private _tokenService: TokenService,
    @InjectModel(Login) private _login: typeof Login,
  ) {}

  async getLogin(email, password): Promise<any> {
    const login = await this._login.findOne({
      attributes: ['userId', 'createdAt', 'updatedAt', 'password'],
      where: { email: email },
      include: [
        {
          model: user,
          as: 'user',
          attributes: ['nickName', 'name', 'email', 'phone', 'active'],
          include: [
            {
              model: TypeUser,
              as: 'user_type',
              attributes: ['id', 'description', 'active'],
            },
          ],
        },
      ],
    });
    if (!login?.userId) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Have no user with this email!',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const res = await compare(password, login.password);
    login.password = undefined;

    if (!res) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Password is wrong!',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = this._tokenService.signToken({ userId: login.userId });
    return { login, token };
  }

  async newLogin(login) {
    return await this._login.create(login);
  }
}
