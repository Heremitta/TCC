import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';
import { Category } from './models/category.model';
import { imagesProduct } from './models/images.model';
import { Product } from './models/products.model';

const IMPORTS = [
  forwardRef(() => UsersModule),
  SequelizeModule.forFeature([Product, Category, imagesProduct]),
];
@Module({
  imports: [...IMPORTS],
  controllers: [],
  providers: [],
})
export class ProductsModule {}
