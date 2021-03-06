var path = require('path');
var express = require('express');
var Mailgun = require('mailgun-js');
var Dropbox = require('dropbox');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

var dbx = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/resume/docx', function(req, res) {
    dbx.filesGetTemporaryLink({
        path: '/public/jeremyhertzresume.docx'
    }).then(function(result) {
        res.send(result.link)
    }).catch(function(error) {
        throw error
    })
});

app.get('/api/resume/pdf', function(req, res) {
    dbx.filesGetTemporaryLink({
        path: '/public/jeremyhertzresume.pdf'
    }).then(function(result) {
        res.send(result.link)
    }).catch(function(error) {
        throw error
    })
});

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post('/api/send', function(req, res) {
    var mailgun = new Mailgun({
        apiKey: process.env.API_KEY,
        domain: 'jeremyhertz.com'
    });

    var data = {
        from: req.body.email,
        to: 'info@jeremyhertz.com',
        subject: '[JeremyHertz.com] Message from ' + req.body.name,
        text: req.body.message
    };

    mailgun.messages().send(data, function(err, body) {
        if(err) {
            console.log(err);
            res.sendStatus(err.statusCode)
        }

        res.sendStatus(200)
    })

});

app.listen(port, function() {
    console.log('Server started: http://localhost:' + port + '/');
});