import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexaoSocketService } from './connection/connectionSocket';

export interface IdisplayMessage {
  date: Date;
  message: string;
}
export interface Imessage {
  chatId: string;
  sender: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
}
export interface Ichat {
  id?: string;
  productId: string;
  userPrimaryId: string;
  userSecondaryId: string;
  lastMessageId?: string;
  createdAt: Date;
  updatedAt: Date;
}
@Injectable({
  providedIn: 'root',
})
export class ChatService  {
  messages: Observable<Imessage[]>;

  constructor(public chatSocket: ConexaoSocketService) {}


  /**
   * See interface in {@link Imessage}
   */
  sendMessage(message: Imessage, idSender: string): void {
    this.chatSocket.socket.emit('message', { message, idSender });
  }
  listem(evento: string): Observable<any> {
    let observable = new Observable((observe) => {
      this.chatSocket.socket.on(evento, (data) => {
        observe.next(data);
      });
      //  return ()=> {this.socket.socket.disconnect()}
    });
    return observable;
  }
}
