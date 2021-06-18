import { IsNotEmpty, IsString, MaxLength, IsBase64 } from 'class-validator';
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
import { user } from './user.model';

@Table({
  tableName: 'adress_user',
})
export class AdressUser extends Model {
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
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @BelongsTo(() => user)
  user?: user;

  @IsNotEmpty()
  @ForeignKey(() => user)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;
}
