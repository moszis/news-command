(function () {
    'use strict';
    
    angular.module('mapApp').factory('newsEventSvc', newsEventSvc);

	function newsEventSvc($resource) {

		var vm = this;


		
		vm.events = [
	                  {
                   	  name : "eventOne", 
                   	  desc : "ScienceCasts: Ocean Worlds - We once thought oceans made our planet unique, but ‘ocean worlds’ are all around us.",
	                      city : 'Aleppo',
	                      lat : 36.215719,
	                      long : 37.158996
	                  },
	                  {
	                	  
                   	  name : "event22", 
                   	  desc : "ScienceCasts: Ocean Worlds - We once thought oceans made our planet unique, but ‘ocean worlds’ are all around us.",
	                      city : 'New York',
	                      lat : 36.6700,
	                      long : 37.158996
	                  },
	                  {
                   	  name : "event33", 
                   	  desc : "ScienceCasts: Ocean Worlds - We once thought oceans made our planet unique, but ‘ocean worlds’ are all around us.",
	                	  city : 'Chicago',
	                      lat : 41.8819,
	                      long : -87.6278
	                  },
	                  {
                   	  name : "event44", 
                   	  desc : "ScienceCasts: Ocean Worlds - We once thought oceans made our planet unique, but ‘ocean worlds’ are all around us.",
	                	  city : 'Los Angeles',
	                      lat : 34.0500,
	                      long : -118.2500
	                  },
	                  {
                   	  name : "event55", 
                   	  desc : "ScienceCasts: Ocean Worlds - We once thought oceans made our planet unique, but ‘ocean worlds’ are all around us.",
	                	  city : 'Las Vegas',
	                      lat : 36.0800,
	                      long : -115.1522
	                  }
	              ];
		
		
		
		

        var getNewsEventsResource = $resource('/news-services/rest/news/:limit');
    
  
        
        
        
		function getEvents(){
		
		    var limit = 50;
			return getNewsEventsResource.query({limit}).$promise;
		}
		
		
		
		function hideEvent(newsEvent){
			console.log(newsEvent);
		}
		
		
		return {
			getEvents: getEvents,
			hideEvent: hideEvent
		}
		
	}
	
	
})();