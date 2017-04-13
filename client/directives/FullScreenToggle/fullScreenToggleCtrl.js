(function () {
    'use strict';
    
	angular.module('app').controller('fullScreenToggleCtrl', fullScreenToggleCtrl);
                                                       
	fullScreenToggleCtrl.$inject = ['$scope'];

	function fullScreenToggleCtrl($scope) {
	
		var vm = this;
	    vm.fullScreen = fullScreen;


	    function fullScreen(){

	      function launchFS(element) {
	        if (element.requestFullScreen){
	        	element.requestFullScreen();
	        }
	        else if (element.mozRequestFullScreen){
	        	element.mozRequestFullScreen();
	        }
	        else if (element.webkitRequestFullScreen){
	        	element.webkitRequestFullScreen();
	        }
	      }
	      
	      
	      function cancelFS() {
	    	  
	        if (document.cancelFullScreen){
	        	document.cancelFullScreen();
	        }
	        else if (document.mozCancelFullScreen){
	        	document.mozCancelFullScreen();
	        }
	        else if (document.webkitCancelFullScreen){
	        	document.webkitCancelFullScreen();
	        }

	      }
	      
	      if (!window.screenTop && !window.screenY) {
	    	  cancelFS();  
	      }
	      else {
	    	  launchFS(document.documentElement);	
	    	   
	      }
	    };
	    
	    

	}

})();