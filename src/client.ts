/// <reference path="./typings/main.d.ts" />
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
            draw();
        }, 16);
    }

    function init() {
        mainDraw = new MainDraw();
        myself = new Myself();
    }

    function draw() {
        context.fillStyle="rgba(255,255,255,1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        mainDraw.draw(context);
    }

    $("canvas").mousedown(function(e) {
        var rect = e.target.getBoundingClientRect();
        var mousex = Math.floor(e.clientX - rect.left);
        var mousey = Math.floor(e.clientY - rect.top);
        myself.clickProcess(mousex, mousey);
    });
})
