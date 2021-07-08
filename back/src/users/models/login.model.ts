import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Model } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { user } from './user.model';

export interface login {
  email;
  password;
}

@Table
export class Login extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

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
