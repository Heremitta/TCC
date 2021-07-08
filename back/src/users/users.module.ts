import { DynamicModule, Module } from '@nestjs/common';
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
import { TokenController } from './controllers/token.controller';
import { AdressUser } from './models/adressUser.model';
import { CoreModule } from 'src/@core/core.module';
import { ConfigInit } from 'src/config/config';

const IMPORTS = [
  CoreModule,
  SequelizeModule.forFeature([TypeUser, user, Login, AdressUser]),
];
const PROVIDER = [
  UserService,
  TokenService,
  LoginService,
  UserTypeService,
  TypeUser,
  Login,
  user,
  ConfigInit,
];
const EXPORTS = [...PROVIDER, ...IMPORTS];

@Module({
  imports: [...IMPORTS],
  controllers: [
    UserController,
    UserTypeController,
    LoginController,
    TokenController,
  ],
  providers: [...PROVIDER],
  exports: [...EXPORTS],
})
export class UsersModule {
  constructor(private configInit: ConfigInit) {}

  onModuleInit() {
    setTimeout(() => {
      this.configInit.init();
    }, 1000);
  }
  static forRoot(): DynamicModule {
    return {
      module: UsersModule,
      imports: [...IMPORTS],
      providers: [...PROVIDER],
    };
  }
}
