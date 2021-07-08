import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Chat } from './chat.model';

@Table({
  tableName: 'messages_chat',
})
export class MessagesChat extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id;

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
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  sender: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
