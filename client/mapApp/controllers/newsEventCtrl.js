(function () {
    'use strict';
    
	angular.module('mapApp').controller('newsEventCtrl', newsEventCtrl);
                                                       
	mapTopNavBarCtrl.$inject = ['$scope', 'newsEventSvc'];

	function newsEventCtrl($scope, newsEventSvc) {
		
		var vm = this;
		vm.getEvents = getEvents;
		
		function test(event){
            event.preventDefault();
            event.stopPropagation();
		}
		
		function getEvents(){
			return newsEventSvc.getEvents();
		}
		
	}
	
	
})();