"use strict";
exports.__esModule = true;
exports.VirtualTabletop = void 0;
var lipwigjs_1 = require("lipwigjs");
var Game_1 = require("./Game");
var Player_1 = require("./Player");
var VirtualTabletop = (function () {
    function VirtualTabletop() {
        var _this = this;
        this.game = undefined;
        var btnHost = document.getElementById('btnHost');
        btnHost === null || btnHost === void 0 ? void 0 : btnHost.addEventListener('click', function () {
            var _a, _b;
            var txtName = document.getElementById('txtName');
            var username = txtName === null || txtName === void 0 ? void 0 : txtName.value;
            if (username == undefined || username.length == 0) {
                return;
            }
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var host = new lipwigjs_1.LipwigHost('ws://localhost:8989');
            host.on('created', function (code) {
                var client = host.createLocalClient();
                client.on('joined', function () {
                    _this.game = new Game_1.Game(host, code);
                    var player = new Player_1.Player(client, username);
                });
            });
        });
        var btnClient = document.getElementById('btnJoin');
        btnClient === null || btnClient === void 0 ? void 0 : btnClient.addEventListener('click', function () {
            var _a, _b;
            var txtName = document.getElementById('txtName');
            var username = txtName === null || txtName === void 0 ? void 0 : txtName.value;
            if (username == undefined || username.length == 0) {
                return;
            }
            var codeElement = document.getElementById('txtCode');
            var code = codeElement === null || codeElement === void 0 ? void 0 : codeElement.value;
            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
            var client = new lipwigjs_1.LipwigClient('ws://localhost:8989', code);
            client.on('joined', function () {
                var player = new Player_1.Player(client, username);
            });
        });
    }
    return VirtualTabletop;
}());
exports.VirtualTabletop = VirtualTabletop;
new VirtualTabletop();
