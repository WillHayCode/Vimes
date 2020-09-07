"use strict";
exports.__esModule = true;
exports.VirtualTabletop = void 0;
var lipwigjs_1 = require("lipwigjs");
var lipwig_chat_1 = require("lipwig-chat");
var VirtualTabletop = (function () {
    function VirtualTabletop() {
        var btnHost = document.getElementById('btnHost');
        btnHost === null || btnHost === void 0 ? void 0 : btnHost.addEventListener('click', function () {
            var _a, _b;
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var host = new lipwigjs_1.LipwigHost('ws://localhost:8989');
            var chatHost = new lipwig_chat_1.ChatHost(host);
            host.on('created', function (code) {
                console.log(code);
            });
        });
        var btnClient = document.getElementById('btnHost');
        btnClient === null || btnClient === void 0 ? void 0 : btnClient.addEventListener('click', function () {
            var _a, _b;
            var codeElement = document.getElementById('txtCode');
            var code = codeElement === null || codeElement === void 0 ? void 0 : codeElement.value;
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var client = new lipwigjs_1.LipwigClient('ws://localhost:8989', code);
            var chatClient = new lipwig_chat_1.ChatClient(client);
            chatClient.onAll(function (name, message) {
                alert(name + ": " + message);
            });
        });
    }
    return VirtualTabletop;
}());
exports.VirtualTabletop = VirtualTabletop;
