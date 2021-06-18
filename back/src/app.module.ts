import { ChatModule } from './chat/chat.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './@core/core.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ChatModule, CoreModule.forRoot(), ProductsModule, UsersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
