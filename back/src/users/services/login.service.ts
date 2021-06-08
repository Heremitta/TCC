import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoginModel } from '../models/login.model';
import { userModel } from '../models/user.model';
import { userTypeModel } from '../models/userType.model';
import { TokenService } from './token.service';
import {hash,compare} from 'bcrypt'

@Injectable()
export class LoginService {
  constructor(  private _tokenService:TokenService,
                @InjectModel(LoginModel) private _login: typeof LoginModel
              ) {}

  async getLogin( email, password ): Promise<any> {

    let login = await this._login.findOne({
                  attributes:['userId','createdAt','updatedAt','password'],
                  where: { "email":email},
                  include:[{
                    model:userModel,
                    as:'user',
                    attributes:['nickName','name','email','phone','active'],
                    include:[{
                        model:userTypeModel,
                        as:'user_type',
                        attributes:['id','description','active']
                    }]
                  }]
                 })
    if(!(login?.userId)){
      throw new HttpException({
        status:HttpStatus.NOT_FOUND,
        error:'Have no user with this email!'
      },HttpStatus.NOT_FOUND);
    }
    let res = await compare(password,login.password)
    login.password = undefined

    if(!res){
      throw new HttpException({
        status:HttpStatus.UNAUTHORIZED,
        error:'Password is wrong!'
      },HttpStatus.UNAUTHORIZED);
    }

    let token = this._tokenService.signToken({userId:login.userId})
    return {login, token}
  }

  async newLogin(login) {
    return await this._login.create(login);
  }
}
