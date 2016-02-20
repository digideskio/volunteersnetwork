var app = angular.module('sampleApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/search.html',
			controller: 'MainController'
		});

		// .when('/organisations', {
		// 	templateUrl: 'views/organisations.html',
		// 	controller: 'GeekController'
		// });

	$locationProvider.html5Mode(true);

}]);

app.directive('searchResult', function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/jobCard.html',
       replace: true,
       scope: {
           jobObject: "="
       }
   };
});
