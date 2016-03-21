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

  sendMessage(input: string) {
    let message: Message;
    this.selectedChat.thread.push(
      {
      'from': 0,
      'timestamp': '03.06 4:30 pm',
      'body' : input
      }
    );
    this.selectedChat.newMessage = '';
    this._http.post('http://localhost/Text3/php/api.php/put/message', input);
  }

  ngOnInit() {
    // this._chatService.getChats()
    //   .then(chats => this.chats = chats)
    //   .then(chats => this.selectChat(chats[0])
    // );

    this._http.get('http://localhost/Text3/php/api.php/get/messages')
      .map(res => res.json())
      .subscribe(
        chats => this.chats = chats
        // chats => this.selectedChat(chats[0])
      );
  }

  ngAfterViewChecked() {

    // First let's check that messages are being shown
    if (this.selectedChat) {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

}
