/// <reference path="./main.d.ts" />

$(function() {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var socket = io.connect();
    var mainDraw;
    var myself;

    window.onload = function() {
        init();
        setInterval(function() {
            update();
            draw();
        }, 16);
    }

    function init() {
        myself = new Myself();
        mainDraw = new MainDraw(myself);
    }

    function draw() {
        context.fillStyle="rgba(255,255,255,1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        mainDraw.draw(context);
    }

    function update() {
        myself.update();
    }

    $("canvas").mousedown(function(e) {
        var rect = e.target.getBoundingClientRect();
        var mousex = Math.floor(e.clientX - rect.left);
        var mousey = Math.floor(e.clientY - rect.top);
        myself.clickProcess(mousex, mousey);
    });

    socket.on('update', function(data) {
        for (var i = 0; i < 100; i++) {
            if (data.emitPlayerData[i]) {
                console.log(data.emitPlayerData[i]);
            }
        }
    });
})
