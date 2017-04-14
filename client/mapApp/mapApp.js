(function () {
    'use strict';

	var mapApp = angular.module('mapApp', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/map', {
	    templateUrl: 'mapApp/views/mapView.html',
	    controller: 'googleMapCtrl'
	  });
	}]);
	

})();
