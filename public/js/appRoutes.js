angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/oppurtunities', {
			templateUrl: 'views/oppurtunities.html',
			controller: 'NerdController'
		})

		.when('/organisations', {
			templateUrl: 'views/organisations.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);