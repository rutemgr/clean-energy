app.controller('MainController', function($scope, APIData, $q) {
	
	var apiCalls = [];
	
	apiCalls.push(APIData.getWind());
	apiCalls.push(APIData.getWater());
	apiCalls.push(APIData.getSolar());
	apiCalls.push(APIData.getNuclear());
	apiCalls.push(APIData.getTotal());
	
	$scope.labels = ["Tuuli", "Vesi", "Aurinko", "Ydinvoima", "Tuotanto Suomessa"];

	var receivedData = [100, 100, 100, 100, 100];
  
  $scope.mainChart1 = {};
    
  $scope.mainChart1.type = "ColumnChart";
  
      $scope.tuuli = [
        {v: "Tuuli"},
        {v: 100},
    ];
  
    $scope.vesi = [
        {v: "Vesi"},
        {v: 100},
    ];
  
    $scope.aurinko = [
        {v: "Aurinko"},
        {v: 100},
    ];
  
    $scope.ydinvoima = [
        {v: "Ydinvoima"},
        {v: 100},
    ];
  
    $scope.tuotanto = [
        {v: "Kaikki tuotanto"},
        {v: 100},
    ];

    $scope.mainChart1.data = {"cols": [
        {id: "t", label: "Voima", type: "string"},
        {id: "s", label: "MW", type: "number"}
    ], "rows": [
        {c: $scope.tuuli},
        {c: $scope.vesi},
        {c: $scope.aurinko},
        {c: $scope.ydinvoima},
        {c: $scope.tuotanto}
    ]};
  
  $scope.mainChart1.options = {
     'hAxis' : { 
        textStyle : {
            fontSize: 16 // or the number you want
        }
    }
  };
  
	$q.all(apiCalls).then(function(response) {
		
		var arr1 = response[0].data.length;

    $scope.totalClean = Math.round(((response[0].data.value + response[1].data.value + response[2].data.value +response[3].data.value) / response[4].data.value)*100);
    
    $scope.tuuli = [
        {v: "Tuuli"},
        {v: response[0].data.value},
    ];
  
    $scope.vesi = [
        {v: "Vesi"},
        {v: response[1].data.value},
    ];
  
    $scope.aurinko = [
        {v: "Aurinko"},
        {v: response[2].data.value},
    ];
  
    $scope.ydinvoima = [
        {v: "Ydinvoima"},
        {v: response[3].data.value},
    ];
  
    $scope.tuotanto = [
        {v: "Kaikki tuotanto"},
        {v: response[4].data.value},
    ];

    $scope.mainChart1.data = {"cols": [
        {id: "t", label: "Voima", type: "string"},
        {id: "s", label: "MW", type: "number"}
    ], "rows": [
        {c: $scope.tuuli},
        {c: $scope.vesi},
        {c: $scope.aurinko},
        {c: $scope.ydinvoima},
        {c: $scope.tuotanto}
    ]};

	});
});