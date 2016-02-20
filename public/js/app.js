var app = angular.module('sampleApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		});

		// .when('/organisations', {
		// 	templateUrl: 'views/organisations.html',
		// 	controller: 'GeekController'
		// });

	$locationProvider.html5Mode(true);

}]);
