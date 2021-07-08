import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Chat } from '../models/chat.model';
import { ChatService } from '../services/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private _chatService: ChatService) {}

  @Post()
  newChat(@Body() chat: { chat: Chat; token: string }) {
    return this._chatService.newChat(chat);
  }
  @Get(':id/:token')
  getAllChats(@Param('id') id, @Param('token') token) {
    return this._chatService.getAllChats({ id, token });
  }
  @Get(':id')
  getChat(@Param('id') id) {
    return this._chatService.getChat(id);
  }
  @Delete(':id')
  deleteChat(@Param('id') id) {
    return this._chatService.deleteChat(id);
  }
}
