app.service('APIData' , function($http) {
	
	getWind = function() {
		return $http.get('/api/wind').then(function(response) {
			var data = response.data;
			return data;
		});
	}
	
	getWater = function() {
		return $http.get('/api/water').then(function(response) {
			var data = response.data;
			return data;
		});
	}
	
	getSolar = function() {
		return $http.get('/api/solar').then(function(response) {
			var data = response.data;
			return data;
		});
	}
	
	getNuclear = function() {
		return $http.get('/api/nuclear').then(function(response) {
			var data = response.data;
			return data;
		});
	}
	
	getTotal = function() {
		return $http.get('/api/total').then(function(response) {
			var data = response.data;
			return data;
		});
	}
	
	return {
		getWind : getWind,
		getWater : getWater,
		getSolar : getSolar,
		getNuclear : getNuclear,
		getTotal: getTotal
	};
});