(function () {
    'use strict';
    
    angular.module('mapApp').directive('newsPanelTab', newsPanelTab);

    newsPanelTab.$inject = [];

    function newsPanelTab() {
       return{
    	  templateUrl: 'directives/NewsPanelTab/newsPanelTabTmpl.html',
          restrict: 'E',
          scope: {
        	  event: '='
          },
          controller: 'newsPanelTabCtrl',
          controllerAs: 'npt'
       }
    
       console.log($scope);
    }
    
    
    //***************Controller****************************//
    
    angular.module('mapApp').controller('newsPanelTabCtrl', newsPanelTabCtrl);
    
    newsPanelTabCtrl.$inject = ['$scope'];
    
    function newsPanelTabCtrl($scope) {

		var vm = this;
		vm.hide = hide;
		vm.selectTab = selectTab;
		
    	vm.event = $scope.event;
    	vm.isCollapsed = false;
    	

    	
    	function selectTab(event){

			event.preventDefault();
			event.stopPropagation();
			
			$scope.$parent.map.panToEvent(vm.event);
    	}
    	
		function hide(event){
			
			event.preventDefault();
			event.stopPropagation();

			$scope.$parent.map.hideEvent(vm.event);
			
			collapse();

		}
		
		function collapse(){
			vm.isCollapsed = true;
		}
		
		if(vm.event.hidden == true){
			collapse();
		}
    };
    
    
})();