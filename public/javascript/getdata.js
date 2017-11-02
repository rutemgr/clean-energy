// Ajax calls to get data from server 
var dataValues = [0,0,0,0,0];
var percentage = 0;
var counter = 0; 

$.ajax({
	type: 'GET',
	url: "/power/wind",
	success: function(result) {
		dataValues[0] = result.data.value;
		console.log(result.data.value);
		myBarChart.data.datasets.forEach((dataset) => {
			dataset.data[0] = result.data.value;
		});
		myBarChart.update();
		countOnComplete();
	}
});

$.ajax({
	type: 'GET',
	url: "/power/water",
	success: function(result) {
		dataValues[1] = result.data.value;
		console.log(result.data.value);
		myBarChart.data.datasets.forEach((dataset) => {
			dataset.data[1] = result.data.value;
		});
		myBarChart.update();
		countOnComplete();
	}
});

$.ajax({
	type: 'GET',
	url: "/power/solar",
	success: function(result) {
		dataValues[2] = result.data.value;
		console.log(result.data.value);
		myBarChart.data.datasets.forEach((dataset) => {
			dataset.data[2] = result.data.value;
		});
		myBarChart.update();
		countOnComplete();
	}
});

$.ajax({
	type: 'GET',
	url: "/power/nuclear",
	success: function(result) {
		dataValues[3] = result.data.value;
		console.log(result.data.value);
		myBarChart.data.datasets.forEach((dataset) => {
			dataset.data[3] = result.data.value;
		});
		myBarChart.update();
		countOnComplete();
	}
});

$.ajax({
	type: 'GET',
	url: "/power/total",
	success: function(result) {
		dataValues[4] = result.data.value;
		console.log(result.data.value);
		myBarChart.data.datasets.forEach((dataset) => {
			dataset.data[4] = result.data.value;
		});
		myBarChart.update();
		countOnComplete();
	}
});

function countOnComplete() {
	counter++;
	if (counter >= 5) {
		percentage = ((dataValues[0] + dataValues[1] + dataValues[2] + dataValues[3]) / dataValues[4]) * 100;
		console.log("Percentage: " + percentage);
		var text = $("#percentage").text();
		console.log(text);
		$("#percentage").text(Math.round(percentage) + text);
	}
}