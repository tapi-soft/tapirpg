/// <reference path="./typings/main.d.ts" />

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io2 = require('socket.io')(http);

app.use(express.static(__dirname + '/../client'));

io2.sockets.on('connection', function(socket) {
    console.log("connect");
});

http.listen(30000, function() {
    console.log("server listen");
});
