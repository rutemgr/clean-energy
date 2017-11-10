var dateFormat = require('dateformat');

function getDateAgo(daysAgo) {
	var d = new Date();
	d.setDate(d.getDate() + daysAgo);
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	var formatted = dateFormat(d,'yyyy-mm-dd');
	return formatted;
}

exports.getDateAgo = getDateAgo;