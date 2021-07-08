import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TokenService } from 'src/users/services/token.service';
import { MessagesChat } from '../models/message.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(MessagesChat)
    private _MessagesChat: typeof MessagesChat,
    @Inject(forwardRef(() => TokenService))
    private _tokenService: TokenService,
  ) {}

  getAllMessages({ chatId, token }) {
    console.log(token, 'getAllMessages');
    this._MessagesChat.findAll({
      where: {
        chatId: chatId,
      },
    });
  }
  getMessages(idMessage) {
    this._MessagesChat.findAll({
      where: {
        id: idMessage,
      },
    });
  }
  deleteMessage(idMessage) {
    this._MessagesChat.destroy({
      where: {
        id: idMessage,
      },
    });
  }
  alterMessage(message) {
    this._MessagesChat.update(message, {
      where: {
        id: message.id,
      },
    });
  }
}
