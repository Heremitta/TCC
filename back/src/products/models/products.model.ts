import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsFloat,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { user } from '../../users/models/user.model';
import { Category } from './category.model';

@Table
export class Product extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description: string;

  @IsNotEmpty()
  @IsFloat
  @MaxLength(255)
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @IsNotEmpty()
  @IsString()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location;

  @BelongsTo(() => user)
  user?: user;

  @IsNotEmpty()
  @ForeignKey(() => user)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => Category)
  category?: Category;

  @IsNotEmpty()
  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  categoryId: string;
}
