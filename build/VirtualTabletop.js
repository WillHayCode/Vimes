"use strict";
exports.__esModule = true;
exports.VirtualTabletop = void 0;
var lipwigjs_1 = require("lipwigjs");
var lipwig_chat_1 = require("lipwig-chat");
var VirtualTabletop = (function () {
    function VirtualTabletop() {
        var _this = this;
        this.chatClient = undefined;
        var btnHost = document.getElementById('btnHost');
        btnHost === null || btnHost === void 0 ? void 0 : btnHost.addEventListener('click', function () {
            var _a, _b;
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var host = new lipwigjs_1.LipwigHost('ws://localhost:8989');
            var chatHost = new lipwig_chat_1.ChatHost(host);
            host.on('created', function (code) {
                var _a, _b;
                (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                (_b = document.getElementById('content')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                var client = host.createLocalClient();
                _this.chatClient = new lipwig_chat_1.ChatClient(client, 'Sam');
                _this.setChatListeners();
                console.log(code);
            });
        });
        var btnClient = document.getElementById('btnJoin');
        btnClient === null || btnClient === void 0 ? void 0 : btnClient.addEventListener('click', function () {
            var _a, _b;
            var codeElement = document.getElementById('txtCode');
            var code = codeElement === null || codeElement === void 0 ? void 0 : codeElement.value;
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var client = new lipwigjs_1.LipwigClient('ws://localhost:8989', code);
            client.on('joined', function () {
                var _a, _b;
                (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                (_b = document.getElementById('content')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
                _this.chatClient = new lipwig_chat_1.ChatClient(client, 'Ben');
                _this.setChatListeners();
            });
        });
    }
    VirtualTabletop.prototype.setChatListeners = function () {
        var _this = this;
        if (this.chatClient == undefined) {
            throw new Error();
        }
        this.chatClient.onAll(function (name, message) {
            var chatLog = document.getElementById('chatLog');
            var messageDiv = document.createElement('p');
            var messageContent = document.createTextNode(name + ':' + message);
            messageDiv.appendChild(messageContent);
            chatLog === null || chatLog === void 0 ? void 0 : chatLog.appendChild(messageDiv);
        });
        var btnSend = document.getElementById('btnSendMessage');
        btnSend === null || btnSend === void 0 ? void 0 : btnSend.addEventListener('click', function () {
            var txtMessage = document.getElementById('txtNewMessage');
            var message = txtMessage === null || txtMessage === void 0 ? void 0 : txtMessage.value;
            if (message == undefined || message.length == 0) {
                return;
            }
            _this.chatClient.send(message);
        });
    };
    return VirtualTabletop;
}());
exports.VirtualTabletop = VirtualTabletop;
new VirtualTabletop();
