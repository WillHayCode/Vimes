/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/VirtualTabletop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/Game.js":
/*!***********************!*\
  !*** ./build/Game.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Game = void 0;\nvar lipwig_chat_1 = __webpack_require__(/*! lipwig-chat */ \"./node_modules/lipwig-chat/lib/LipwigChat.js\");\nvar Game = (function () {\n    function Game(host, code) {\n        var _this = this;\n        this.chatHost = new lipwig_chat_1.ChatHost(host);\n        setTimeout(function () {\n            _this.chatHost.sendToAll('Room Code', code);\n        }, 10);\n    }\n    return Game;\n}());\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./build/Game.js?");

/***/ }),

/***/ "./build/Player.js":
/*!*************************!*\
  !*** ./build/Player.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Player = void 0;\nvar lipwig_chat_1 = __webpack_require__(/*! lipwig-chat */ \"./node_modules/lipwig-chat/lib/LipwigChat.js\");\nvar Player = (function () {\n    function Player(client, username) {\n        var _a, _b;\n        this.chatClient = new lipwig_chat_1.ChatClient(client, username);\n        (_a = document.getElementById('loading')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');\n        (_b = document.getElementById('content')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');\n        this.setChatListeners();\n    }\n    Player.prototype.setChatListeners = function () {\n        var _this = this;\n        if (this.chatClient == undefined) {\n            throw new Error();\n        }\n        this.chatClient.onAll(function (username, message) {\n            var chatLog = document.getElementById('chatLog');\n            var messageDiv = document.createElement('p');\n            var messageContent = document.createTextNode(username + ': ' + message);\n            messageDiv.appendChild(messageContent);\n            chatLog === null || chatLog === void 0 ? void 0 : chatLog.appendChild(messageDiv);\n        });\n        var btnSend = document.getElementById('btnSendMessage');\n        btnSend === null || btnSend === void 0 ? void 0 : btnSend.addEventListener('click', function () {\n            var txtMessageID = 'txtNewMessage';\n            var txtMessage = document.getElementById(txtMessageID);\n            var message = txtMessage.value;\n            txtMessage.value = '';\n            if (message == undefined || message.length == 0) {\n                return;\n            }\n            _this.chatClient.send(message);\n        });\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./build/Player.js?");

/***/ }),

/***/ "./build/VirtualTabletop.js":
/*!**********************************!*\
  !*** ./build/VirtualTabletop.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.VirtualTabletop = void 0;\nvar lipwigjs_1 = __webpack_require__(/*! lipwigjs */ \"./node_modules/lipwigjs/lib/Lipwig.js\");\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./build/Game.js\");\nvar Player_1 = __webpack_require__(/*! ./Player */ \"./build/Player.js\");\nvar VirtualTabletop = (function () {\n    function VirtualTabletop() {\n        var _this = this;\n        this.game = undefined;\n        var btnHost = document.getElementById('btnHost');\n        btnHost === null || btnHost === void 0 ? void 0 : btnHost.addEventListener('click', function () {\n            var _a, _b;\n            var txtName = document.getElementById('txtName');\n            var username = txtName === null || txtName === void 0 ? void 0 : txtName.value;\n            if (username == undefined || username.length == 0) {\n                return;\n            }\n            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');\n            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');\n            var host = new lipwigjs_1.LipwigHost('ws://localhost:8989');\n            host.on('created', function (code) {\n                var client = host.createLocalClient();\n                client.on('joined', function () {\n                    _this.game = new Game_1.Game(host, code);\n                    var player = new Player_1.Player(client, username);\n                });\n            });\n        });\n        var btnClient = document.getElementById('btnJoin');\n        btnClient === null || btnClient === void 0 ? void 0 : btnClient.addEventListener('click', function () {\n            var _a, _b;\n            var txtName = document.getElementById('txtName');\n            var username = txtName === null || txtName === void 0 ? void 0 : txtName.value;\n            if (username == undefined || username.length == 0) {\n                return;\n            }\n            var codeElement = document.getElementById('txtCode');\n            var code = codeElement === null || codeElement === void 0 ? void 0 : codeElement.value;\n            (_a = document.getElementById('portal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');\n            (_b = document.getElementById('loading')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');\n            var client = new lipwigjs_1.LipwigClient('ws://localhost:8989', code);\n            client.on('joined', function () {\n                var player = new Player_1.Player(client, username);\n            });\n        });\n    }\n    return VirtualTabletop;\n}());\nexports.VirtualTabletop = VirtualTabletop;\nnew VirtualTabletop();\n\n\n//# sourceURL=webpack:///./build/VirtualTabletop.js?");

/***/ }),

/***/ "./node_modules/lipwig-chat/lib/ChatClient.js":
/*!****************************************************!*\
  !*** ./node_modules/lipwig-chat/lib/ChatClient.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChatClient = void 0;\nvar ChatClient = (function () {\n    function ChatClient(client, name) {\n        var _this = this;\n        this.client = client;\n        this.name = name;\n        this.callbacks = [];\n        client.send('lw-chat-setname', this.name);\n        client.on('lw-chat-setname', function (newName) {\n            _this.name = newName;\n        });\n        client.on('lw-chat-message', this.handle, { object: this });\n    }\n    ChatClient.prototype.handle = function (name, message) {\n        this.callbacks.forEach(function (callbackMap) {\n            var callback = callbackMap.callback;\n            var pattern = callbackMap.regex;\n            if (message.match(pattern)) {\n                callback(name, message);\n            }\n        });\n    };\n    ;\n    ChatClient.prototype.send = function (message) {\n        this.client.send('lw-chat-message', message);\n    };\n    ChatClient.prototype.on = function (match, callback) {\n        var map = {\n            regex: match,\n            callback: callback\n        };\n        this.callbacks.push(map);\n    };\n    ChatClient.prototype.onAll = function (callback) {\n        var regex = /.*/;\n        this.on(regex, callback);\n    };\n    return ChatClient;\n}());\nexports.ChatClient = ChatClient;\n\n\n//# sourceURL=webpack:///./node_modules/lipwig-chat/lib/ChatClient.js?");

/***/ }),

/***/ "./node_modules/lipwig-chat/lib/ChatHost.js":
/*!**************************************************!*\
  !*** ./node_modules/lipwig-chat/lib/ChatHost.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChatHost = void 0;\nvar ChatUser_1 = __webpack_require__(/*! ./ChatUser */ \"./node_modules/lipwig-chat/lib/ChatUser.js\");\nvar ChatHost = (function () {\n    function ChatHost(host) {\n        this.host = host;\n        this.users = {};\n        this.callbacks = [];\n        var users = host.getUsers();\n        for (var userid in users) {\n            var user = users[userid];\n            this.add(user);\n        }\n        this.host.on('lw-chat-message', this.handle, { object: this });\n        this.host.on('joined', this.add, { object: this });\n    }\n    ChatHost.prototype.add = function (user) {\n        var chatUser = new ChatUser_1.ChatUser(user);\n        this.users[user.id] = chatUser;\n        user.on('lw-chat-setname', chatUser.setName, { object: chatUser });\n    };\n    ChatHost.prototype.handle = function (user, message) {\n        var block = false;\n        var chatUser = this.users[user.id];\n        var name = chatUser.name;\n        this.callbacks.forEach(function (callbackMap) {\n            var callback = callbackMap.callback;\n            var pattern = callbackMap.regex;\n            if (message.match(pattern)) {\n                callback(chatUser, message);\n                block = callbackMap.block || block;\n            }\n        });\n        if (!block) {\n            this.sendToAll(name, message);\n        }\n    };\n    ChatHost.prototype.on = function (match, callback, blocking) {\n        if (blocking === void 0) { blocking = false; }\n        var map = {\n            regex: match,\n            callback: callback,\n            block: blocking\n        };\n        this.callbacks.push(map);\n    };\n    ChatHost.prototype.onAll = function (callback, blocking) {\n        if (blocking === void 0) { blocking = false; }\n        var regex = /.*/;\n        this.on(regex, callback, blocking);\n    };\n    ChatHost.prototype.sendToAll = function (name, message) {\n        for (var userid in this.users) {\n            var user = this.users[userid];\n            user.send(name, message);\n        }\n    };\n    return ChatHost;\n}());\nexports.ChatHost = ChatHost;\n\n\n//# sourceURL=webpack:///./node_modules/lipwig-chat/lib/ChatHost.js?");

/***/ }),

/***/ "./node_modules/lipwig-chat/lib/ChatUser.js":
/*!**************************************************!*\
  !*** ./node_modules/lipwig-chat/lib/ChatUser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChatUser = void 0;\nvar ChatUser = (function () {\n    function ChatUser(user) {\n        this.user = user;\n        this.name = '';\n    }\n    ChatUser.prototype.setName = function (name) {\n        this.name = name;\n    };\n    ChatUser.prototype.send = function (name, message) {\n        this.user.send('lw-chat-message', name, message);\n    };\n    return ChatUser;\n}());\nexports.ChatUser = ChatUser;\n\n\n//# sourceURL=webpack:///./node_modules/lipwig-chat/lib/ChatUser.js?");

/***/ }),

/***/ "./node_modules/lipwig-chat/lib/LipwigChat.js":
/*!****************************************************!*\
  !*** ./node_modules/lipwig-chat/lib/LipwigChat.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChatClient = exports.ChatHost = void 0;\nvar ChatHost_1 = __webpack_require__(/*! ./ChatHost */ \"./node_modules/lipwig-chat/lib/ChatHost.js\");\nexports.ChatHost = ChatHost_1.ChatHost;\nvar ChatClient_1 = __webpack_require__(/*! ./ChatClient */ \"./node_modules/lipwig-chat/lib/ChatClient.js\");\nexports.ChatClient = ChatClient_1.ChatClient;\n\n\n//# sourceURL=webpack:///./node_modules/lipwig-chat/lib/LipwigChat.js?");

/***/ }),

/***/ "./node_modules/lipwig-events/lib/EventManager.js":
/*!********************************************************!*\
  !*** ./node_modules/lipwig-events/lib/EventManager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.EventManager = void 0;\nvar EventManager = (function () {\n    function EventManager() {\n        this.events = {};\n    }\n    EventManager.prototype.on = function (event, fn, context) {\n        if (context === void 0) { context = { object: this }; }\n        this.addEvent(event, fn, context, false);\n    };\n    EventManager.prototype.once = function (event, fn, context) {\n        if (context === void 0) { context = { object: this }; }\n        this.addEvent(event, fn, context, true);\n    };\n    EventManager.prototype.emit = function (event) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var callbacks = this.events[event];\n        if (callbacks === undefined) {\n            return;\n        }\n        callbacks.forEach(function (callback, index, object) {\n            callback.fn.apply(callback, args);\n            if (callback.once) {\n                object.splice(index, 1);\n            }\n        });\n    };\n    EventManager.prototype.clear = function (event) {\n        delete this.events[event];\n    };\n    EventManager.prototype.contains = function (event) {\n        return event in this.events;\n    };\n    EventManager.prototype.get = function (event) {\n        return this.events[event][0].fn;\n    };\n    EventManager.prototype.addEvent = function (event, fn, context, once) {\n        if (this.events[event] === undefined) {\n            this.events[event] = [];\n        }\n        var callback = {\n            once: once,\n            fn: fn.bind(context.object),\n            context: context\n        };\n        this.events[event].push(callback);\n    };\n    return EventManager;\n}());\nexports.EventManager = EventManager;\n\n\n//# sourceURL=webpack:///./node_modules/lipwig-events/lib/EventManager.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/Lipwig.js":
/*!*********************************************!*\
  !*** ./node_modules/lipwigjs/lib/Lipwig.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.SocketUser = exports.LipwigLocalClient = exports.User = exports.LipwigHost = exports.LipwigClient = void 0;\nvar LipwigClient_1 = __webpack_require__(/*! ./LipwigClient */ \"./node_modules/lipwigjs/lib/LipwigClient.js\");\nexports.LipwigClient = LipwigClient_1.LipwigClient;\nvar LipwigHost_1 = __webpack_require__(/*! ./LipwigHost */ \"./node_modules/lipwigjs/lib/LipwigHost.js\");\nexports.LipwigHost = LipwigHost_1.LipwigHost;\nvar User_1 = __webpack_require__(/*! ./User */ \"./node_modules/lipwigjs/lib/User.js\");\nexports.User = User_1.User;\nvar LipwigLocalClient_1 = __webpack_require__(/*! ./LipwigLocalClient */ \"./node_modules/lipwigjs/lib/LipwigLocalClient.js\");\nexports.LipwigLocalClient = LipwigLocalClient_1.LipwigLocalClient;\nvar SocketUser_1 = __webpack_require__(/*! ./SocketUser */ \"./node_modules/lipwigjs/lib/SocketUser.js\");\nexports.SocketUser = SocketUser_1.SocketUser;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/Lipwig.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/LipwigClient.js":
/*!***************************************************!*\
  !*** ./node_modules/lipwigjs/lib/LipwigClient.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nexports.__esModule = true;\nexports.LipwigClient = void 0;\nvar SocketUser_1 = __webpack_require__(/*! ./SocketUser */ \"./node_modules/lipwigjs/lib/SocketUser.js\");\nvar LipwigClient = (function (_super) {\n    __extends(LipwigClient, _super);\n    function LipwigClient(url, code, data) {\n        if (data === void 0) { data = {}; }\n        var _this = _super.call(this, url) || this;\n        _this.reserved.on('joined', _this.setID, { object: _this });\n        _this.code = code;\n        _this.data = data;\n        return _this;\n    }\n    LipwigClient.prototype.send = function (event) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var message = {\n            event: event,\n            data: args,\n            sender: this.id,\n            recipient: []\n        };\n        this.sendMessage(message);\n    };\n    LipwigClient.prototype.connected = function () {\n        var message = {\n            event: 'join',\n            data: [this.code, this.data],\n            sender: '',\n            recipient: []\n        };\n        this.sendMessage(message);\n    };\n    LipwigClient.prototype.handle = function (event) {\n        var _a;\n        var message = JSON.parse(event.data);\n        var args = message.data.concat(message);\n        (_a = this.reserved).emit.apply(_a, __spreadArrays([message.event], args));\n        this.emit.apply(this, __spreadArrays([message.event], args));\n    };\n    return LipwigClient;\n}(SocketUser_1.SocketUser));\nexports.LipwigClient = LipwigClient;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/LipwigClient.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/LipwigHost.js":
/*!*************************************************!*\
  !*** ./node_modules/lipwigjs/lib/LipwigHost.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nexports.__esModule = true;\nexports.LipwigHost = void 0;\nvar SocketUser_1 = __webpack_require__(/*! ./SocketUser */ \"./node_modules/lipwigjs/lib/SocketUser.js\");\nvar User_1 = __webpack_require__(/*! ./User */ \"./node_modules/lipwigjs/lib/User.js\");\nvar LipwigLocalClient_1 = __webpack_require__(/*! ./LipwigLocalClient */ \"./node_modules/lipwigjs/lib/LipwigLocalClient.js\");\nvar LipwigHost = (function (_super) {\n    __extends(LipwigHost, _super);\n    function LipwigHost(url, options) {\n        if (options === void 0) { options = {}; }\n        var _this = _super.call(this, url) || this;\n        _this.reserved.once('created', _this.created, { object: _this });\n        _this.reserved.on('joined', _this.joined, { object: _this });\n        _this.users = {};\n        _this.groups = {};\n        _this.options = options;\n        return _this;\n    }\n    LipwigHost.prototype.getUsers = function () {\n        return this.users;\n    };\n    LipwigHost.prototype.close = function (reason) {\n        if (reason === void 0) { reason = ''; }\n        var message = {\n            event: 'close',\n            data: [reason],\n            recipient: [],\n            sender: this.id\n        };\n        this.sendMessage(message);\n    };\n    LipwigHost.prototype.assign = function (user, name) {\n        var group = this.groups[name];\n        if (group === undefined) {\n            this.groups[name] = [];\n            group = this.groups[name];\n        }\n        if (group.indexOf(user) !== -1) {\n            return;\n        }\n        group.push(user);\n        user.send('assigned', name);\n    };\n    LipwigHost.prototype.unassign = function (user, name) {\n        var group = this.groups[name];\n        if (group === undefined) {\n            return;\n        }\n        var position = group.indexOf(user);\n        if (position === -1) {\n            return;\n        }\n        this.groups[name] = group.splice(position, 1);\n        user.send('unassigned', name);\n    };\n    LipwigHost.prototype.getGroup = function (name) {\n        var group = this.groups[name];\n        if (group === undefined) {\n            return [];\n        }\n        return group;\n    };\n    LipwigHost.prototype.send = function (message, filter) {\n        var args = [];\n        for (var _i = 2; _i < arguments.length; _i++) {\n            args[_i - 2] = arguments[_i];\n        }\n        var users = [];\n        if (filter.whitelist === undefined) {\n            filter.whitelist = [];\n        }\n        users = this.filter(filter.whitelist, true);\n        if (filter.blacklist === undefined) {\n            filter.blacklist = [];\n        }\n        var blacklist = this.filter(filter.blacklist, false);\n        users.forEach(function (user) {\n            if (blacklist.indexOf(user) > -1) {\n                return;\n            }\n            user.send.apply(user, __spreadArrays([message], args));\n        });\n    };\n    LipwigHost.prototype.createLocalClient = function (data, callback) {\n        var _this = this;\n        if (data === void 0) { data = {}; }\n        if (callback === void 0) { callback = function () { return null; }; }\n        var localCount = 1;\n        var localID;\n        do {\n            localID = this.id + '-local' + localCount;\n            localCount++;\n        } while (this.users[localID] !== undefined);\n        var localUser = new User_1.User(localID, this, true);\n        var localClient = new LipwigLocalClient_1.LipwigLocalClient(this, localUser, data);\n        localUser.client = localClient;\n        localClient.id = localID;\n        this.users[localID] = localUser;\n        localClient.on('joined', callback, { object: localClient });\n        setTimeout(function () {\n            _this.emit('joined', localUser, data);\n            localClient.emit('joined', localID);\n        }, 10);\n        return localClient;\n    };\n    LipwigHost.prototype.handle = function (event) {\n        var _a;\n        var message = JSON.parse(event.data);\n        var args = message.data.concat(message);\n        (_a = this.reserved).emit.apply(_a, __spreadArrays([message.event], args));\n        if (message.sender in this.users) {\n            var user = this.users[message.sender];\n            args.push(message);\n            user.emit.apply(user, __spreadArrays([message.event], args));\n            args.splice(0, 0, user);\n        }\n        if (message.event !== 'joined') {\n            this.emit.apply(this, __spreadArrays([message.event], args));\n        }\n    };\n    LipwigHost.prototype.connected = function () {\n        var message = {\n            event: 'create',\n            data: [this.options],\n            sender: '',\n            recipient: []\n        };\n        this.sendMessage(message);\n    };\n    LipwigHost.prototype.created = function (id) {\n        this.setID(id);\n    };\n    LipwigHost.prototype.joined = function (userID, data, message) {\n        var user = new User_1.User(userID, this);\n        this.users[userID] = user;\n        this.emit('joined', user, data, message);\n    };\n    LipwigHost.prototype.filter = function (groups, whitelist) {\n        var _this = this;\n        var filtered = [];\n        if (groups.length === 0 && whitelist) {\n            var users_1 = this.getUsers();\n            var userIDs = Object.keys(users_1);\n            userIDs.forEach(function (id) {\n                filtered.push(users_1[id]);\n            });\n            return filtered;\n        }\n        groups.forEach(function (name) {\n            filtered = filtered.concat(_this.getGroup(name));\n        });\n        filtered = filtered.filter(function (user, index, users) {\n            return users.indexOf(user) === index;\n        });\n        return filtered;\n    };\n    return LipwigHost;\n}(SocketUser_1.SocketUser));\nexports.LipwigHost = LipwigHost;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/LipwigHost.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/LipwigLocalClient.js":
/*!********************************************************!*\
  !*** ./node_modules/lipwigjs/lib/LipwigLocalClient.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nexports.__esModule = true;\nexports.LipwigLocalClient = void 0;\nvar lipwig_events_1 = __webpack_require__(/*! lipwig-events */ \"./node_modules/lipwig-events/lib/EventManager.js\");\nvar LipwigLocalClient = (function (_super) {\n    __extends(LipwigLocalClient, _super);\n    function LipwigLocalClient(parent, user, data) {\n        if (data === void 0) { data = {}; }\n        var _this = _super.call(this) || this;\n        _this.id = '';\n        _this.parent = parent;\n        _this.user = user;\n        _this.data = data;\n        _this.reserved = new lipwig_events_1.EventManager();\n        _this.reserved.on('joined', _this.setID, { object: _this });\n        return _this;\n    }\n    LipwigLocalClient.prototype.send = function (event) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var message = {\n            event: event,\n            data: args,\n            sender: this.id,\n            recipient: []\n        };\n        var messageString = JSON.stringify(message);\n        var fakeEvent = {\n            data: messageString\n        };\n        this.parent.handle(fakeEvent);\n    };\n    LipwigLocalClient.prototype.handle = function (message) {\n        var _a;\n        var args = message.data.concat(message);\n        (_a = this.reserved).emit.apply(_a, __spreadArrays([message.event], args));\n        this.emit.apply(this, __spreadArrays([message.event], args));\n    };\n    LipwigLocalClient.prototype.setID = function (id) {\n        this.id = id;\n    };\n    return LipwigLocalClient;\n}(lipwig_events_1.EventManager));\nexports.LipwigLocalClient = LipwigLocalClient;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/LipwigLocalClient.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/SocketUser.js":
/*!*************************************************!*\
  !*** ./node_modules/lipwigjs/lib/SocketUser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.SocketUser = void 0;\nvar lipwig_events_1 = __webpack_require__(/*! lipwig-events */ \"./node_modules/lipwig-events/lib/EventManager.js\");\nvar SocketUser = (function (_super) {\n    __extends(SocketUser, _super);\n    function SocketUser(url) {\n        var _this = _super.call(this) || this;\n        _this.url = url;\n        _this.id = '';\n        _this.reserved = new lipwig_events_1.EventManager();\n        _this.reserved.on('ping', _this.pong, _this);\n        _this.socket = new WebSocket(url);\n        _this.retry = false;\n        _this.addListeners();\n        return _this;\n    }\n    SocketUser.prototype.reconnect = function (socket) {\n        this.socket = socket;\n        this.addListeners();\n        var message = {\n            event: 'reconnect',\n            data: [this.id],\n            sender: this.id,\n            recipient: []\n        };\n        this.sendMessage(message);\n    };\n    SocketUser.prototype.sendMessage = function (message) {\n        if (message.sender.length === 0) {\n            message.sender = this.id;\n        }\n        this.socket.send(JSON.stringify(message));\n    };\n    SocketUser.prototype.ping = function () {\n        var now = new Date().getTime();\n        var message = {\n            event: 'lw-ping',\n            data: [now],\n            recipient: [],\n            sender: ''\n        };\n        this.sendMessage(message);\n    };\n    SocketUser.prototype.setID = function (id) {\n        this.id = id;\n    };\n    SocketUser.prototype.addListeners = function () {\n        var _this = this;\n        this.socket.addEventListener('open', function () {\n            _this.emit('connected');\n            _this.connected();\n        });\n        this.socket.addEventListener('error', function () {\n        });\n        this.socket.addEventListener('message', function (event) {\n            _this.handle(event);\n        });\n        this.socket.addEventListener('close', function () {\n            if (_this.retry) {\n                _this.autoReconnect();\n            }\n            _this.emit('reconnected');\n        });\n    };\n    SocketUser.prototype.autoReconnect = function () {\n        var _this = this;\n        var socket = new WebSocket(this.url);\n        socket.addEventListener('error', function () {\n            setTimeout(_this.autoReconnect, 1000);\n        });\n        socket.addEventListener('open', function () {\n            _this.reconnect(socket);\n        });\n    };\n    SocketUser.prototype.pong = function (then) {\n        var now = new Date().getTime();\n        var ping = now - then;\n        this.emit('pong', ping);\n        return false;\n    };\n    return SocketUser;\n}(lipwig_events_1.EventManager));\nexports.SocketUser = SocketUser;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/SocketUser.js?");

/***/ }),

/***/ "./node_modules/lipwigjs/lib/User.js":
/*!*******************************************!*\
  !*** ./node_modules/lipwigjs/lib/User.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.User = void 0;\nvar lipwig_events_1 = __webpack_require__(/*! lipwig-events */ \"./node_modules/lipwig-events/lib/EventManager.js\");\nvar User = (function (_super) {\n    __extends(User, _super);\n    function User(id, parent, local) {\n        if (local === void 0) { local = false; }\n        var _this = _super.call(this) || this;\n        _this.id = id;\n        _this.parent = parent;\n        _this.local = local;\n        return _this;\n    }\n    User.prototype.send = function (event) {\n        var _a;\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var message = {\n            event: event,\n            data: args,\n            sender: this.parent.id,\n            recipient: [this.id]\n        };\n        if (this.local) {\n            (_a = this.client) === null || _a === void 0 ? void 0 : _a.handle(message);\n        }\n        else {\n            this.parent.sendMessage(message);\n        }\n    };\n    User.prototype.assign = function (name) {\n        this.parent.assign(this, name);\n    };\n    User.prototype.unassign = function (name) {\n        this.parent.unassign(this, name);\n    };\n    User.prototype.kick = function (reason) {\n        if (reason === void 0) { reason = ''; }\n        this.send('kick', this.id, reason);\n    };\n    return User;\n}(lipwig_events_1.EventManager));\nexports.User = User;\n\n\n//# sourceURL=webpack:///./node_modules/lipwigjs/lib/User.js?");

/***/ })

/******/ });