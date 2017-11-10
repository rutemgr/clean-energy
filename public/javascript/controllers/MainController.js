app.controller('MainController', function($scope, APIData, $q) {
	
	var apiCalls = [];
	
	apiCalls.push(APIData.getWind());
	apiCalls.push(APIData.getWater());
	apiCalls.push(APIData.getSolar());
	apiCalls.push(APIData.getNuclear());
	apiCalls.push(APIData.getTotal());
	
	$scope.labels = ["Tuuli", "Vesi", "Aurinko", "Ydinvoima", "Tuotanto Suomessa"];
  $scope.series = ['mainData'];
	
	
	$q.all(apiCalls).then(function(response) {
		
		var arr1 = response[0].data.length;
		
		$scope.data = [
			[
				response[0].data[arr1-1].value,
				response[1].data[0].value,
				response[2].data[0].value,
				response[3].data[0].value,
				response[4].data[0].value
			],
		];
	});
	
	$scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
	
	/*var windValues = APIData.getWind();
	windValues.then(function(response) {
		$scope.windData = response;
		chartData[0] = response.data[0].value;
		
	});
	
	var waterValues = APIData.getWater();
	waterValues.then(function(response) {
		$scope.waterData = response;
	});
	
	var solarValues = APIData.getSolar();
	solarValues.then(function(response) {
		$scope.solarData = response;
	});
	
	var nuclearValues = APIData.getNuclear();
	nuclearValues.then(function(response) {
		$scope.nuclearData = response;
	});
	
	var totalValues = APIData.getTotal();
	totalValues.then(function(response) {
		$scope.totalData = response;
	});
	
	$scope.labels = ["Tuuli", "Vesi", "Aurinko", "Ydinvoima", "Tuotanto Suomessa"];
  $scope.series = ['mainData'];
  $scope.data = [
    [chartData[0], chartData[1], chartData[2], chartData[3], chartData[4]],
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };*/
});