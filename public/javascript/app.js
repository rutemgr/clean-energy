var app = angular.module('cleanEnergy', ['ngRoute', 'chart.js']);

app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
		})
		.when('/tuuli', {
				templateUrl: 'views/tuuli.html',
				controller: 'MainController'
		})
		.when('/vesi', {
				templateUrl: 'views/vesi.html',
				controller: 'MainController'
		})
		.when('/aurinko', {
				templateUrl: 'views/aurinko.html',
				controller: 'MainController'
		})
		.when('/ydinvoima', {
				templateUrl: 'views/ydinvoima.html',
				controller: 'MainController'
		});
});




