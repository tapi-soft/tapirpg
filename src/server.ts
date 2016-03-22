/// <reference path="./main.d.ts" />

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io2 = require('socket.io')(http);

const MAX_PLAYER = 100;
const MAX_MONSTER = 100;
var usePlayerId = [];
var useMonsterId = [];
var serverPlayer = [];
var serverMonster = [];

app.use(express.static(__dirname + '/../client'));

io2.sockets.on('connection', function(socket) {
    var id = getEmptyPlayerId();
    if (id == -1) {

    } else {
        console.log("id: "+id+" connected");
        usePlayerId[id] = 1;
    }

    socket.on('disconnect', function() {
        console.log("id: "+id+" disconnected");
        usePlayerId[id] = 0;
    });

    setInterval(function() {
        var emitData = new EmitData();
        for (var i = 0; i < MAX_PLAYER; i++) {
            if (usePlayerId[i] == 0) { continue; }
            if (id == i) { continue; }
            var playerData = new EmitPlayerData();
            playerData.setData(serverPlayer[i]);
            emitData.addPlayerData(playerData);
        }
        for (var i = 0; i < MAX_MONSTER; i++) {
            if (useMonsterId[i] == 0) { continue; }
            var monsterData = new EmitMonsterData();
            monsterData.setData(serverMonster[i]);
            emitData.addMonsterData(monsterData);
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
        usePlayerId[i] = 0;
        serverPlayer[i] = new ServerPlayer();
    }
    for (var i = 0; i < MAX_MONSTER; i++) {
        useMonsterId[i] = 0;
        serverMonster[i] = new ServerMonster();
    }
    createMonster();
}

function update() {
    for (var i = 0; i < MAX_PLAYER; i++) {
        if (usePlayerId[i] == 0) { continue; }
        serverPlayer[i].update();
    }
    for (var i = 0; i < MAX_MONSTER; i++) {
        if (useMonsterId[i] == 0) { continue; }
        serverMonster[i].update();
    }
}

function getEmptyPlayerId() {
    for (var i = 0; i < MAX_PLAYER; i++) {
        if (usePlayerId[i] == 0) { return i; }        
    }
    return -1;
}

function getEmptyMonsterId() {
    for (var i = 0; i < MAX_MONSTER; i++) {
        if (useMonsterId[i] == 0) { return i; }
    }
    return -1;
}

function createMonster() {
    var id = getEmptyMonsterId();
    useMonsterId[id] = 1;
}
