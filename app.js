var express = require('express');
var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.use('/js', express.static(__dirname + '/js'));
//app.use('/dist', express.static(__dirname + '/../dist'));
//app.use('/css', express.static(__dirname + '/css'));
app.use('help1/partials', express.static(__dirname + '/help1/partials'));
app.use('help2/partials', express.static(__dirname + '/help2/partials'));

app.get('/help1/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('help1/index.html', { root: __dirname });
});

app.get('/help2/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('help2/index.html', { root: __dirname });
});

app.listen(3006); //the port you want to use