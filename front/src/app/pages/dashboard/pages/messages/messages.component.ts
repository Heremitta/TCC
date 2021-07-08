import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userResultApi } from '../../../../@core/data/userResultApi.model';
import { UserService } from '../../../../@core/mock/services/user.service';
import { Ichat } from '../../components/chat/chat.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  chats: Observable<Ichat>;

  constructor(private _messagesService: MessagesService, private _userService: UserService) { }

  ngOnInit() {
    this._userService.user$.subscribe((user: userResultApi): void => {
      this.chats = this._messagesService.getAllChats({userId: user.login.userId, token: user.token});
    }, error => {
      console.log(error);
    });
  }

}
