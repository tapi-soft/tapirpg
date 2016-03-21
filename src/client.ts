/// <reference path="./typings/main.d.ts" />

$(function() {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var socket = io.connect();
    var imageMap;

    window.onload = function() {
        init();
        setInterval(function() {
            draw();
        }, 16);
    }

    function init() {
        imageMap = new Image();
        imageMap.src = "image/map/map1.png";
    }

    function draw() {
        context.fillStyle="rgba(255,255,255,1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        for (var y = 0; y < 20; y++) {
            for (var x = 0; x < 20; x++) {
                context.drawImage(imageMap, x * 64, y * 32);
            }
        }
    }
})
