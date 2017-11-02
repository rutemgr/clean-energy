var express = require('express');
var router = express.Router();
var request = require('request');
var apiRequest = require('../src/helpers/apirequest.js');

router.get('/', function (req, res, next) {
    console.log("in router!");
});

router.get('/wind', function (req, res, next) {
	request(apiRequest.createOptions("wind"), function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			res.send({name: "wind", data: apiData});
		}
	});
});

router.get('/water', function (req, res, next) {
    request(apiRequest.createOptions("water"), function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			res.send({name: "water", data: apiData});
		}
	});
});

router.get('/solar', function (req, res, next) {
    request(apiRequest.createOptions("solar"), function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			res.send({name: "solar", data: apiData});
		}
	});
});

router.get('/nuclear', function (req, res, next) {
    request(apiRequest.createOptions("nuclear"), function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			res.send({name: "nuclear", data: apiData});
		}
	});
});

router.get('/total', function (req, res, next) {
    request(apiRequest.createOptions("total"), function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			res.send({name: "total", data: apiData});
		}
	});
});

module.exports = router;