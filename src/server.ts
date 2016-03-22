/// <reference path="./main.d.ts" />

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io2 = require('socket.io')(http);

const MAX_PLAYER = 100;
var useId = [];
var serverPlayer = [];

app.use(express.static(__dirname + '/../client'));

io2.sockets.on('connection', function(socket) {
    var id = getEmptyId();
    if (id == -1) {

    } else {
        console.log("id: "+id+" connected");
        useId[id] = 1;
    }

    socket.on('disconnect', function() {
        console.log("id: "+id+" disconnected");
        useId[id] = 0;
    });

    setInterval(function() {
        var emitData = new EmitData();
        for (var i = 0; i < MAX_PLAYER; i++) {
            if (useId[i] == 0) { continue; }
            if (id == i) { continue; }
            var playerData = new EmitPlayerData();
            playerData.setData(serverPlayer[i]);
            emitData.addPlayerData(playerData);
        }
        socket.emit('update', emitData);
    }, 1000);

    socket.on('move', function(data) {
        serverPlayer[id].setTargetX(data.targetX);
        serverPlayer[id].setTargetY(data.targetY);
    });
});

http.listen(30000, function() {
    console.log("server listen");
    init();
});

setInterval(function() {
    update();
}, 16);

function init() {
    for (var i = 0; i < MAX_PLAYER; i++) {
        useId[i] = 0;
        serverPlayer[i] = new ServerPlayer();
    }
}

function update() {
    for (var i = 0; i < 100; i++) {
        if (useId[i] == 0) { continue; }
        serverPlayer[i].update();
    }
}

function getEmptyId() {
    for (var i = 0; i < MAX_PLAYER; i++) {
        if (useId[i] == 0) { return i; }        
    }
    return -1;
}
