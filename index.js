var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});


app.get('/', function(req, res) {
    res.send('Hello World 3');
});