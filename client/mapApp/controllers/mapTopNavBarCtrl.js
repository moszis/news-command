(function () {
    'use strict';
    
	angular.module('mapApp').controller('mapTopNavBarCtrl', mapTopNavBarCtrl);
                                                       
	mapTopNavBarCtrl.$inject = ['$scope'];

	function mapTopNavBarCtrl($scope) {
		
		var vm = this;
		vm.test = test;
		
		function test(event){
            event.preventDefault();
            event.stopPropagation();
            
            alert("h");
		}
		
	}
	
	
})();