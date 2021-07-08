import { Inject, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Roles } from 'src/@core/decorators/roles.decorator';
import { RoleWsGuard } from 'src/chat/guards/role.ws.guard';
import { GeradorUuidService } from 'src/@core/services/geradoruuid.service';
import { Chat } from '../models/chat.model';
import { MessagesChat } from '../models/message.model';

export interface chatDTO {
  userPrimaryId;
  userSecondaryId;
  productId;
  message: messageDTO;
  token;
}
export interface messageDTO {
  id?;
  chatId?;
  sender;
  message;
}
@UseGuards(RoleWsGuard)
@WebSocketGateway(3030, {
  transports: ['websocket'],
})
export class ChatGateway implements OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;
  constructor(
    @Inject(GeradorUuidService)
    private _geradorUUID: GeradorUuidService,
    @InjectModel(Chat) private _chat: typeof Chat,
    @InjectModel(MessagesChat) private _messages: typeof MessagesChat,
  ) {}
  handleDisconnect(_client: Socket) {
    console.log(_client);
  }
  handleConnection(client: any, ..._args: any[]) {
    console.log(_args, client.id);
    client.emit('saiu');
    return client;
  }

  // @Roles('user')
  @SubscribeMessage('createRoom')
  createRoom(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    // client.join(data);
    console.log(data, client);
  }

  @SubscribeMessage('con')
  connection(@MessageBody() data: string, @ConnectedSocket() _client: Socket) {
    console.log('porra do caralho');
    console.log(data, _client);
  }

  @SubscribeMessage('message')
  async opa(@MessageBody() chat, @ConnectedSocket() _client: Socket) {
    console.log(chat);
    console.log('caralho', _client);
  }
  /**
   * @param  {chatDTO} chat
   * see interface in {@link chatDTO}
   */
  @Roles('user')
  @SubscribeMessage('messagem')
  async mesage(
    @MessageBody() chat: chatDTO,
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.newMessage(chat);
    client.emit('respMessage', message);
  }

  //functions
  async newMessage(chat: chatDTO) {
    const { userPrimaryId, productId, userSecondaryId, message } = chat;
    let room = message.chatId ? message.chatId : '';
    if (!room) {
      room = `${userPrimaryId.slice(0, 13)}${userSecondaryId.slice(
        13,
        24,
      )}${productId.slice(24, 36)}`;

      const roomExists = this._chat.findOne({
        where: {
          id: room,
        },
      });
      if (!roomExists) {
        this._chat.create({
          id: room,
          productId: productId,
          userPrimaryId: userPrimaryId,
          userSecondaryId: userSecondaryId,
        });
      }
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
      sender: message.sender,
      message: message.message,
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
