/// <reference path="./main.d.ts" />

$(function() {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var socket = io.connect();
    var mainDraw;
    var myself;
    var player;
    var monster;

    window.onload = function() {
        init();
        setInterval(function() {
            update();
            draw();
        }, 16);
    }

    function init() {
        myself = new ClientMyself();
        player = new ClientPlayerList();
        monster = new ClientMonsterList();
        mainDraw = new MainDraw(myself, player, monster);
    }

    function draw() {
        context.fillStyle="rgba(255,255,255,1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        mainDraw.draw(context);
    }

    function update() {
        myself.update();
        player.update();
        monster.update();
    }

    $("canvas").mousedown(function(e) {
        var rect = e.target.getBoundingClientRect();
        var mousex = Math.floor(e.clientX - rect.left);
        var mousey = Math.floor(e.clientY - rect.top);
        myself.changeTarget(mousex, mousey);
        socket.emit('move', {
            targetX: myself.getTargetX(), 
            targetY: myself.getTargetY()
        });
    });

    socket.on('update', function(data) {
        for (var i = 0; i < 100; i++) {
            if (data.emitPlayerData[i]) {
                if (player.isConnect(i) == 0) {
                    player.connect(i, data.emitPlayerData[i]);
                }
                player.getPlayerData(i).setTarget(data.emitPlayerData[i]);
            } else {
                player.disconnect(i);
            }
        }
        for (var i = 0; i < 100; i++) {
            if (data.emitMonsterData[i]) {
                if (monster.isConnect(i) == 0) {
                    monster.connect(i, data.emitMonsterData[i]);
                }
                monster.getMonster(i).setTarget(data.emitMonsterData[i]);
            } else {
                monster.disconnect(i);
            }
        }
    });

    $(window).keydown(function(e) {
        console.log(e.keyCode);
        // Q
        if (e.keyCode == 81) {
            console.log("やったぜ。");
        }
    });
})
