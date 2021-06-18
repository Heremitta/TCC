import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chat } from './models/chat.model';
import { MessagesChat } from './models/message.model';
import { ChatGateway } from './sockets/chat.gateway';

@Module({
  imports: [SequelizeModule.forFeature([Chat, MessagesChat])],
  controllers: [],
  providers: [ChatGateway],
})
export class ChatModule {}
