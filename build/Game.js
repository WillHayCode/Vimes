"use strict";
exports.__esModule = true;
exports.Game = void 0;
var lipwig_chat_1 = require("lipwig-chat");
var Game = (function () {
    function Game(host, code) {
        var _this = this;
        this.chatHost = new lipwig_chat_1.ChatHost(host);
        setTimeout(function () {
            _this.chatHost.sendToAll('Room Code', code);
        }, 10);
    }
    return Game;
}());
exports.Game = Game;
