import { Component, OnInit }    from 'angular2/core';
import { RouteParams }  from 'angular2/router';

import { Chat } from './chat'
import { ChatService } from './chat.service';

@Component({
  selector: 'chat-window',
  templateUrl: 'app/chat/chat-window.html',
  styleUrls: ['app/chat/chat-window.css'],
  providers: [ChatService]
})

export class ChatWindowComponent implements OnInit {

  chats: Chat[];
  selectedChat: Chat;

  constructor(
    private _chatService: ChatService,
    private _routeParams: RouteParams
  ) {}

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  ngOnInit() {
    this._chatService.getChats().then(chats => this.chats = chats);
  }

}
