var request = require('request');

var apis = [
	{name: 'wind', id: '181', url: 'https://api.fingrid.fi/v1/variable/181/event/json'},
	{name: 'water', id: '191', url: 'https://api.fingrid.fi/v1/variable/191/event/json'},
	{name: 'solar', id: '248', url: 'https://api.fingrid.fi/v1/variable/248/event/json'},
	{name: 'nuclear', id: '188', url: 'https://api.fingrid.fi/v1/variable/188/event/json'}
];

function doRequest(name) {
	var options = createOptions(name);
	var data = '';
	request(options, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var apiData = JSON.parse(body);
			data = apiData;
		}
	});
	
	return data;
}

function createOptions(name) {
	var api = findApi(name);
	var options = {
	url: api.url,
		headers: {
			'Accept':'application/json',
			'variableId': api.id,
			'x-api-key': 'azHs8QZqyq27vEVMPh3JHzUWVFgJ53c1RPF7i1la'
		}
	};
	
	return options;
}

function findApi(name) {
	var obj = '';
	
	for (var i = 0; i < apis.length; i++) {
		if (apis[i].name.indexOf(name) > -1) {
			obj = apis[i];
		}
	}

	return obj;
}

exports.doRequest = doRequest;

