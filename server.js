var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
    console.log('Server started: http://localhost:' + port + '/');
});