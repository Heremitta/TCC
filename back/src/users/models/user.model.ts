import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MaxLength,
  IsBase64,
} from 'class-validator';
import { BLOB } from 'sequelize';
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
import { TypeUser } from './typeUser.model';

@Table
export class user extends Model {
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
    type: DataType.STRING(60),
    allowNull: false,
  })
  nickName: string;

  @IsNotEmpty()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @IsBase64()
  @Column({
    type: BLOB,
    allowNull: true,
  })
  avatar?;

  @MaxLength(20)
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  phone: string;

  @IsEmail()
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email: string;

  @IsNotEmpty()
  @ForeignKey(() => TypeUser)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  typeId: string;

  @IsNotEmpty()
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  active: boolean;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  rating?: number;

  @BelongsTo(() => TypeUser)
  user_type?: TypeUser;

  password?: string;
}
