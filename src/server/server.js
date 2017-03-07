var express = require('express');
var socketIo = require('socket.io');

var port = 1337;

var app = express();

require('./config/middleware.js')(app);

var server = app.listen(port, function() {
  //mount socket.io
  var io = socketIo(server);
  console.log('Socket.io initialized');

  console.log("Server ready, listening to port " + port);
});

module.exports.app = app;