import {
  IsEmail,
  isNotEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
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
import { user } from 'src/users/models/user.model';
import { Chat } from './chat.model';

@Table({
  tableName: 'mesages_chat',
})
export class MessagesChat extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

  @BelongsTo(() => user)
  user?: user;

  @BelongsTo(() => Chat)
  chat?: Chat;

  @IsNotEmpty()
  @ForeignKey(() => Chat)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  chatId: string;

  @IsNotEmpty()
  @ForeignKey(() => user)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userPrimaryId: string;

  @IsNotEmpty()
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userSecondaryId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
