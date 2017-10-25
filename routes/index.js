var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
    url: 'https://api.fingrid.fi/v1/variable/181/event/json',
    headers: {
        'Accept':'application/json',
        'variableId': 181,
        'x-api-key': 'azHs8QZqyq27vEVMPh3JHzUWVFgJ53c1RPF7i1la'
    }
};

function callback(error, response, body) {
    console.log(response.statusCode);
    if(!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
    }
}

router.get('/', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

router.get('/wind', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

router.get('/nuclear', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

router.get('/water', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

router.get('/solar', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

module.exports = router;