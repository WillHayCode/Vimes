"use strict";
exports.__esModule = true;
exports.Player = void 0;
var lipwig_chat_1 = require("lipwig-chat");
var Player = (function () {
    function Player(client, username) {
        var _a, _b;
        this.chatClient = new lipwig_chat_1.ChatClient(client, username);
        (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = document.getElementById('content')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        this.setChatListeners();
    }
    Player.prototype.setChatListeners = function () {
        var _this = this;
        if (this.chatClient == undefined) {
            throw new Error();
        }
        this.chatClient.onAll(function (username, message) {
            var chatLog = document.getElementById('chatLog');
            var messageDiv = document.createElement('p');
            var messageContent = document.createTextNode(username + ': ' + message);
            messageDiv.appendChild(messageContent);
            chatLog === null || chatLog === void 0 ? void 0 : chatLog.appendChild(messageDiv);
        });
        var btnSend = document.getElementById('btnSendMessage');
        btnSend === null || btnSend === void 0 ? void 0 : btnSend.addEventListener('click', function () {
            var txtMessageID = 'txtNewMessage';
            var txtMessage = document.getElementById(txtMessageID);
            var message = txtMessage.value;
            txtMessage.value = '';
            if (message == undefined || message.length == 0) {
                return;
            }
            _this.chatClient.send(message);
        });
    };
    return Player;
}());
exports.Player = Player;
