var express = require('express');
var router = express.Router();

var apiRequest = require('../src/helpers/apirequest.js');

router.get('/', function (req, res, next) {
    console.log("in router!");
	var allData = [];
	allData.push(apiRequest.doRequest('wind'));
	allData.push(apiRequest.doRequest('water'));
	allData.push(apiRequest.doRequest('solar'));
	allData.push(apiRequest.doRequest('nuclear'));
	console.log(allData.length);
    //res.send(allData);
});

router.get('/wind', function (req, res, next) {
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

router.get('/nuclear', function (req, res, next) {
    console.log("in router!");
    request(options, callback);
});

module.exports = router;