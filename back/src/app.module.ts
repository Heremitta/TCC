import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

const IMPORTS = [UsersModule, ProductsModule, ChatModule];
@Module({
  imports: [...IMPORTS],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
