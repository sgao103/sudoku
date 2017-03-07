const PORT = 420;

var express = require('express');
var app = express();

app.listen(PORT, function() {
    console.log("Listening to port " + PORT)
});