import { Component, OnInit } from '@angular/core';
import { userResultApi } from '../../../../@core/data/userResultApi.model';
import { UserService } from '../../../../@core/mock/services/user.service';
import { ChatService, IdisplayMessage, Imessage } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  private _user: userResultApi;
  messages: Imessage[];
  connectionSocket;
  constructor(
    private _chatService: ChatService,
    private _userService: UserService,
  ) {
    this._userService.user$.subscribe(
      (userApi) => {
        this._user = userApi;
      },
      (err) => {
        console.error(err);
      },
    );
  }

  ngOnInit(): void {
    this._chatService.chatSocket.socket.emit('search-for-chats', (chats) => {});
  }
  emitMessage(): void {
    this._chatService.chatSocket.socket.emit('con', 'bora porra');
  }
  newMessage(message: Imessage): void {
    this._chatService.chatSocket.socket.emit('message-for-server', {
      message,
      token: this._user.token,
    });
  }

  receiveMessage(message: Imessage): void {
    this.messages.push(message);
  }
}
