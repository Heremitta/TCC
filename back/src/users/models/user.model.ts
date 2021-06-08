import { IsNotEmpty, IsEmail, IsString, MaxLength } from 'class-validator';
import {
  Table,
  Model,
  Column,
  DataType,
  HasOne,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { userTypeModel } from './userType.model';

@Table
export class userModel extends Model {

  @PrimaryKey  
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id:string

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
  @ForeignKey(() => userTypeModel)
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

  @BelongsTo(() => userTypeModel)
  user_type?: userTypeModel;
  
  password?:string
}
