import { IsNotEmpty, IsBase64 } from 'class-validator';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from './products.model';

@Table({
  tableName: 'images_product',
})
export class imagesProduct extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

  @IsNotEmpty()
  @IsBase64()
  @Column({
    type: DataType.BLOB,
    allowNull: false,
  })
  blob;

  @BelongsTo(() => Product)
  product?: Product;

  @IsNotEmpty()
  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  productId: string;
}
