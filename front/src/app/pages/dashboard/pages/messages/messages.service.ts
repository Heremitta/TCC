import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Ichat } from '../../components/chat/chat.service';
import { ConexaoSocketService } from '../../components/chat/connection/connectionSocket';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(
    private _http: HttpClient,
    private _connectionSocket: ConexaoSocketService,
  ) {}

  getAllChats({ userId, token }) {
    return this._http.get<Ichat>(environment.API + `chat/${userId}/${token}`);
  }
}
