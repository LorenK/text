import { RouteParams }  from 'angular2/router';
import { Component }    from 'angular2/core';

import { Chat } from './chat/chat'
import { ChatsService } from './chat/chats.service';

@Component({
  selector: 'chat-window',
  templateUrl: 'app/chat/chat-window.html',
  styleUrls: ['app/chat/chat-window.css']
})

export class ChatWindowComponent { }
