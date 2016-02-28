System.register(['angular2/core', 'angular2/router', './chat.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, chat_service_1;
    var ChatWindowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            ChatWindowComponent = (function () {
                function ChatWindowComponent(_chatService, _routeParams) {
                    this._chatService = _chatService;
                    this._routeParams = _routeParams;
                }
                ChatWindowComponent.prototype.selectChat = function (chat) {
                    this.selectedChat = chat;
                };
                ChatWindowComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._chatService.getChats()
                        .then(function (chats) { return _this.chats = chats; })
                        .then(function (chats) { return _this.selectChat(chats[0]); });
                };
                ChatWindowComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-window',
                        templateUrl: 'app/chat/chat-window.html',
                        styleUrls: ['app/chat/chat-window.css'],
                        providers: [chat_service_1.ChatService]
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService, router_1.RouteParams])
                ], ChatWindowComponent);
                return ChatWindowComponent;
            }());
            exports_1("ChatWindowComponent", ChatWindowComponent);
        }
    }
});
//# sourceMappingURL=chat-window.component.js.map