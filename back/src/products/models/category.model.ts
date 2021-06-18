import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import {
  Model,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsFloat,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'category_products',
})
export class Category extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description: string;
}
