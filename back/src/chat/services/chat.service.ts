import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TokenService } from 'src/users/services/token.service';
import { Chat } from '../models/chat.model';
import { LoggerService } from 'src/@core/services/logger.service';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat)
    private _chatModel: typeof Chat,
    @Inject(forwardRef(() => TokenService))
    private _tokenService: TokenService,
    @Inject(forwardRef(() => UserService))
    private _userService: UserService,
    @Inject(forwardRef(() => LoggerService))
    private _loggerService: LoggerService,
  ) {}

  async getAllChats({ id, token }) {
    const pass = await this.tokenVerify(token);
    if (pass) {
      const chats = await this._chatModel.findAll({
        where: {
          userPrimaryId: id,
          or: {
            userSecondaryId: id,
          },
        },
      });
      const users = [];
      chats.forEach(async (chat) => {
        chat.userPrimaryId == id
          ? users.push(await this._userService.getOne(chat.userSecondaryId))
          : users.push(await this._userService.getOne(chat.userPrimaryId));
      });
      const result = { chats: chats, users: users };
      return result;
    } else {
      this._loggerService.errorLog(
        `UNAUTHORIZED getAllChats, token ${token} invalid!`,
      );
      this.unAuthorizedErro();
    }
  }
  async getChat(id) {
    return await this._chatModel.findOne({
      where: {
        id: id,
      },
    });
  }
  async newChat({ chat, token }) {
    const pass = await this.tokenVerify(token);
    if (pass) {
      return await this._chatModel.create(chat);
    } else {
      this.unAuthorizedErro();
    }
  }
  async deleteChat(id: any) {
    return await this._chatModel.destroy(id);
  }
  async tokenVerify(token) {
    return await this._tokenService.verifyToken(token);
  }
  unAuthorizedErro() {
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'UNAUTHORIZED you have to login again!',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
