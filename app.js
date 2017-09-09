var express = require('express'),
    jade = require('jade'),
    path = require('path');

var app = express();
app.set('port', process.env.PORT || 5000);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/Calculator', function (req, res) {
    res.render('Calculator');
});

app.get('/Help', function (req, res) {
    res.render('Help');
});

app.get('(/:viewname)?', function (req, res) {
    console.log('rendering');
    res.render('Index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});