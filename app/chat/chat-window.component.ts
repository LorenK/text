import { Component, OnInit }    from 'angular2/core';
import { RouteParams }  from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';

import { Chat } from './chat'
import { ChatService } from './chat.service';
import { Message } from './message';

@Component({
  selector: 'chat-window',
  templateUrl: 'app/chat/chat-window.html',
  styleUrls: ['app/chat/chat-window.css'],
  providers: [
    HTTP_PROVIDERS,
    ChatService
  ]
})

export class ChatWindowComponent implements OnInit {

  chats: Chat[];
  selectedChat: Chat;

  constructor(
    private _chatService: ChatService,
    private _routeParams: RouteParams,
    private _http: Http
  ) {}

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  ngOnInit() {
    // this._chatService.getChats()
    //   .then(chats => this.chats = chats)
    //   .then(chats => this.selectChat(chats[0])
    // );

    this._http.get('app/chat/chats.json')
      .map(res => res.json())
      .subscribe(
        chats => this.chats = chats
        // chats => this.selectedChat(chats[0])
      );

  }

}
