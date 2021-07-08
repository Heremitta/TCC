import { ChatService } from './services/chat.service';
import { ChatController } from './controllers/chat.controller';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';
import { RoleWsGuard } from './guards/role.ws.guard';
import { Chat } from './models/chat.model';
import { MessagesChat } from './models/message.model';
import { MessagesService } from './services/messages.service';
import { ChatGateway } from './sockets/chat.gateway';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    SequelizeModule.forFeature([Chat, MessagesChat]),
  ],
  controllers: [ChatController],
  providers: [
    MessagesService,
    ChatService,
    RoleWsGuard,
    Chat,
    MessagesChat,
    ChatGateway,
  ],
})
export class ChatModule {}
