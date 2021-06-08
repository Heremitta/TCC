import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Model } from 'sequelize';
import {
    AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { userModel } from './user.model';

export interface login{
  email,
  password
}

@Table
export class LoginModel extends Model {
    @PrimaryKey  
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    id

  @IsNotEmpty()
  @IsEmail()
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password: string;

  @BelongsTo(() => userModel)
  user?: userModel;

  @IsNotEmpty()
  @ForeignKey(() => userModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;
}
