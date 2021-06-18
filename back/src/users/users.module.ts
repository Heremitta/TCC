import { DynamicModule, Logger, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './controllers/usuarios.controller';
import { TypeUser } from './models/typeUser.model';
import { user } from './models/user.model';
import { UserTypeService } from './services/userType.service';
import { UserService } from './services/user.service';
import { UserTypeController } from './controllers/usertype.controller';
import { Login } from './models/login.model';
import { LoginService } from './services/login.service';
import { LoginController } from './controllers/login.controller';
import { TokenService } from './services/token.service';
import { CoreModule } from 'src/@core/core.module';
import { TokenController } from './controllers/token.controller';
import { ConfigInit } from 'src/@core/config/config';
import { AdressUser } from './models/adressUser.model';

const IMPORTS = [];
const PROVIDER = [
  UserService,
  TokenService,
  LoginService,
  UserTypeService,
  ConfigInit,
  TypeUser,
  Login,
  user,
  Logger,
];

@Module({
  imports: [
    CoreModule.forRoot(),
    SequelizeModule.forFeature([TypeUser, user, Login, AdressUser]),
  ],
  controllers: [
    UserController,
    UserTypeController,
    LoginController,
    TokenController,
  ],
  providers: [...PROVIDER],
})
export class UsersModule {
  static forRoot(): DynamicModule {
    return {
      module: UsersModule,
      imports: [...IMPORTS],
      providers: [...PROVIDER],
      exports: [...PROVIDER],
    };
  }
}
