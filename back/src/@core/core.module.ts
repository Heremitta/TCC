import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GeradorUuidService } from './services/geradoruuid.service';
import { LoggerService } from './services/logger.service';

const PROVIDER: Provider[] = [LoggerService, GeradorUuidService];

const IMPORTS = [
  ConfigModule.forRoot(),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USUARIO_BANCO_DADOS,
    password:
      process.env.SENHA_BANCO_DADOS == 'root'
        ? ''
        : process.env.SENHA_BANCO_DADOS,
    database: process.env.DATA_BASE,
    autoLoadModels: true,
    synchronize: true,
  }),
];
@Module({
  imports: [...IMPORTS],
  controllers: [],
  providers: [...PROVIDER],
  exports: [...IMPORTS, ...PROVIDER],
})
export class CoreModule {
  // static forRoot(): DynamicModule {
  //   return {
  //     module: CoreModule,
  //     imports: [...IMPORTS],
  //     providers: [...PROVIDER],
  //   };
  // }
}
