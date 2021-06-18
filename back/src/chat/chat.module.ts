import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoreModule } from 'src/@core/core.module';
import { UsersModule } from 'src/users/users.module';
import { RoleWsGuard } from './guards/role.ws.guard';
import { Chat } from './models/chat.model';
import { MessagesChat } from './models/message.model';
import { ChatGateway } from './sockets/chat.gateway';

@Module({
  imports: [
    CoreModule.forRoot(),
    SequelizeModule.forFeature([Chat, MessagesChat]),
    UsersModule.forRoot(),
  ],
  controllers: [],
  providers: [ChatGateway, RoleWsGuard],
})
export class ChatModule {}
