(function () {
    'use strict';
    
    angular.module('app').directive('fullScreenToggle', fullScreenToggle);

    fullScreenToggle.$inject = [];

    function fullScreenToggle() {
       return{
          templateUrl: 'directives/FullScreenToggle/fullScreenToggleTmpl.html',
          restrict: 'E',
          controller: 'fullScreenToggleCtrl',
          controllerAs: 'fst'
       }
    
    }
    
})();