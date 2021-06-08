import { Logger, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './controlles/usuarios.controller';
import { userTypeModel } from './models/userType.model';
import { userModel } from './models/user.model';
import { GeradorUuidService } from './services/geradoruuid.service';
import { UserTypeService } from './services/userType.service';
import { UserService } from './services/user.service';
import { UserTypeController } from './controlles/usertype.controller';
import { LoginModel } from './models/login.model';
import { LoginService } from './services/login.service';
import { LoginController } from './controlles/login.controller';
import { TokenService } from './services/token.service';
import { CoreModule } from 'src/@core/core.module';
import { TokenController } from './controlles/token.controller';
import { ConfigInit } from 'src/config/config';

@Module({
  imports: [CoreModule.forRoot(),SequelizeModule.forFeature([userTypeModel, userModel, LoginModel])],
  controllers: [UserController, UserTypeController, LoginController,TokenController],
  providers: [
    UserService,
    TokenService,
    LoginService,
    UserTypeService,
    GeradorUuidService,
    ConfigInit,
    userTypeModel,
    LoginModel,
    userModel,
    Logger
  ],
})
export class UsersModule {}
