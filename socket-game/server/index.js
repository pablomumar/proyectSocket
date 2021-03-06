var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var socketIO = require('socket.io');
var io = socketIO(server);


const port = process.env.PORT || 3000;

io.on('connection', function(socket){
  console.log('user connected');

  socket.on('chat message', function (msg){
    io.emit('chat message', msg);
    console.log(msg);
  })
});


server.listen(port, function(){
  console.log(`started on port: ${port}`);
});
