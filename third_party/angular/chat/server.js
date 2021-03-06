var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 8080);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
