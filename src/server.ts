/// <reference path="./typings/main.d.ts" />

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/../client'));

http.listen(30000, function() {
    console.log("server listen");
});
