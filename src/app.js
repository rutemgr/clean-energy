'use strict';

var express = require('express');
var app = express();

var routes = require('../routes/index');

app.use('/', express.static('public'));
app.use('/test', routes);

app.listen(3000, function() {
    console.log('Server running!');
});