import { CoreModule } from './@core/core.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule.forRoot(), UsersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {}
}
