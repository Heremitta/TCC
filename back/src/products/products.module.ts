import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { imagesProduct } from './models/images.model';
import { Product } from './models/products.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category, imagesProduct])],
  controllers: [],
  providers: [],
})
export class ProductsModule {}
