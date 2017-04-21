(function () {
    'use strict';
    
	angular.module('mapApp').controller('newsEventCtrl', newsEventCtrl);
                                                       
	newsEventCtrl.$inject = ['$scope', 'newsEventSvc'];

	function newsEventCtrl($scope, newsEventSvc) {
		
		var vm = this;
		vm.getEvents = getEvents;
		vm.setHidden = setHidden;
		
		function test(event){
            event.preventDefault();
            event.stopPropagation();
		}
		
		function getEvents(){
			return newsEventSvc.getEvents();
		}
		
		
		function hideEvent(newsEvent){
			console.log(newsEvent);
			console.log($scope.newsEvents);
		}
	}
	
	
})();