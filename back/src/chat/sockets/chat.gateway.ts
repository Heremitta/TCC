import { SetMetadata, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Roles } from 'src/@core/decorators/roles.decorator';
import { RoleWsGuard } from 'src/@core/guards/role.ws.guard';
import { GeradorUuidService } from 'src/users/services/geradoruuid.service';
import { Chat } from '../models/chat.model';
import { MessagesChat } from '../models/message.model';

export interface Ichat {
  room;
  userPrimaryId;
  productId;
  userSecondaryId;
  message;
}

@WebSocketGateway(80, {
  namespace: 'chat',
  transports: 'websocket',
  pingInterval: 1000,
  pingTimeout: 5000,
  method: ['GET', 'POST'],
})
@UseGuards(RoleWsGuard)
export class ChatGateway {
  constructor(
    private _geradorUUID: GeradorUuidService,
    @InjectModel(Chat) private _chat: typeof Chat,
    @InjectModel(MessagesChat) private _messages: typeof MessagesChat,
  ) {}
  @WebSocketServer()
  server: Server;

  @Roles('userLogged')
  @SubscribeMessage('createRoom')
  createRoom(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    client.join(data);
  }

  /**
   * @param  {Ichat} chat
   * see interface in {@link Ichat}
   */
  @SubscribeMessage('message')
  async mesage(
    @MessageBody() chat: Ichat,
    @ConnectedSocket() client: Socket,
  ): Promise<MessagesChat> {
    const { room, userPrimaryId, productId, userSecondaryId, message } = chat;

    const roomExists = this._chat.findOne({
      where: {
        id: room,
      },
    });
    if (!roomExists) {
      const newChat = this._chat.create({
        id: room,
        productId: productId,
        userPrimaryId: userPrimaryId,
        userSecondaryId: userSecondaryId,
      });
    }
    let uuid;
    let uuidExists;
    do {
      uuid = this._geradorUUID.uuidv4();
      uuidExists = await this._messages.findOne({
        where: {
          id: uuid,
        },
      });
    } while (uuidExists);
    const newMessage = await this._messages.create({
      id: uuid,
      chatId: room,
      userPrimaryId: userPrimaryId,
      userSecondaryId: userSecondaryId,
      message: message,
    });

    return newMessage;
  }
  // @SubscribeMessage('new_mesage')
  // newMesage(@MessageBody() data: string): string {
  //   return data;
  // }
  // @SubscribeMessage('new_mesage')
  // newMesage(@MessageBody() data: string): string {
  //   return data;
  // }
  // @SubscribeMessage('new_mesage')
  // newMesage(@MessageBody() data: string): string {
  //   return data;
  // }
}
