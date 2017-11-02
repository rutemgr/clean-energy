var express = require('express');
var app = express();

var routes = require('../routes/');

app.use(express.static('../public'));
app.use('/power', routes);

app.listen(3000, function() {
    console.log('Server running!');
});