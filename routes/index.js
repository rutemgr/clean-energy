var request = require('request');
var apiRequest = require('../src/helpers/apirequest.js');

module.exports = function(app) {
		app.get('/', function (req, res, next) {
			res.sendFile('/public/index.html', {root: '../'});
		});

		app.get('/api/wind', function (req, res, next) {
			request(apiRequest.createOptions("wind"), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var apiData = JSON.parse(body);
					var l = apiData.length;
					console.log(apiData[l-1]);
					res.send({name: "wind", data: apiData});
				}
			});
		});

		app.get('/api/water', function (req, res, next) {
				request(apiRequest.createOptions("water"), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var apiData = JSON.parse(body);
					res.send({name: "water", data: apiData});
				}
			});
		});

		app.get('/api/solar', function (req, res, next) {
				request(apiRequest.createOptions("solar"), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var apiData = JSON.parse(body);
					res.send({name: "solar", data: apiData});
				}
			});
		});

		app.get('/api/nuclear', function (req, res, next) {
				request(apiRequest.createOptions("nuclear"), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var apiData = JSON.parse(body);
					res.send({name: "nuclear", data: apiData});
				}
			});
		});

		app.get('/api/total', function (req, res, next) {
				request(apiRequest.createOptions("total"), function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var apiData = JSON.parse(body);
					res.send({name: "total", data: apiData});
				}
			});
		});
}

