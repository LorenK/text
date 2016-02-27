import { Component }                                        from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ChatWindowComponent } from './chat/chat-window.component';

@RouteConfig([
  {
    path: '/:chat/:id',
    name: 'Chat',
    component: ChatWindowComponent,
    useAsDefault: true
  }
])

@Component({
    selector: 'my-app',
    template: `
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

export class AppComponent { }
