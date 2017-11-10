var utils = require('./utils.js');

var apis = [
	{name: 'wind', id: '75', url: 'https://api.fingrid.fi/v1/variable/75/events/json'},
	{name: 'water', id: '191', url: 'https://api.fingrid.fi/v1/variable/191/events/json'},
	{name: 'solar', id: '248', url: 'https://api.fingrid.fi/v1/variable/248/events/json'},
	{name: 'nuclear', id: '188', url: 'https://api.fingrid.fi/v1/variable/188/events/json'},
	{name: 'total', id: '74', url: 'https://api.fingrid.fi/v1/variable/74/events/json'},
];

function createOptions(name) {
	var api = findApi(name);
	//console.log(api.url + "?start_time=" + utils.getDateAgo(-30) + "T00:00:00Z&end_time=" + utils.getDateAgo(0) + "T00:00:00Z");
	var options = {
	url: api.url + "?start_time=" + utils.getDateAgo(-30) + "T00:00:00Z&end_time=" + utils.getDateAgo(0) + "T00:00:00Z",
		headers: {
			'Accept':'application/json',
			'variableId': api.id,
			'x-api-key': 'azHs8QZqyq27vEVMPh3JHzUWVFgJ53c1RPF7i1la',
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

exports.createOptions = createOptions;


