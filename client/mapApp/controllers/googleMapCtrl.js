(function () {
    'use strict';
    
	angular.module('mapApp').controller('googleMapCtrl', googleMapCtrl);
                                                       
	googleMapCtrl.$inject = ['$scope', '$window'];

	function googleMapCtrl($scope, $window) {
	
		var vm = this;
		vm.openInfoWindow = openInfoWindow;

	    var Syria_Aleppo = {lat: 36.215719, lng: 37.158996};
	    var random = {lat: 36.215719, lng: 38.158996};
	    
	    var cities = [
	                  {
	                      city : 'Aleppo',
	                      desc : 'Rome!',
	                      lat : 36.215719,
	                      long : 37.158996
	                  },
	                  {
	                      city : 'New York',
	                      desc : 'This city is aiiiiite!',
	                      lat : 40.6700,
	                      long : -73.9400
	                  },
	                  {
	                      city : 'Chicago',
	                      desc : 'This is the second best city in the world!',
	                      lat : 41.8819,
	                      long : -87.6278
	                  },
	                  {
	                      city : 'Los Angeles',
	                      desc : 'This city is live!',
	                      lat : 34.0500,
	                      long : -118.2500
	                  },
	                  {
	                      city : 'Las Vegas',
	                      desc : 'Sin City...\'nuff said!',
	                      lat : 36.0800,
	                      long : -115.1522
	                  }
	              ];
	    

	    var mapOptions = {
	            zoom: 8,
	            center: new google.maps.LatLng(Syria_Aleppo),
	            mapTypeId: google.maps.MapTypeId.TERRAIN
	        }
        
	    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	    

	    
	    vm.markers = [];
	    

      	google.maps.event.addListener(vm.map, "click", function (event) {
      	  
    	    var latitude = event.latLng.lat();
    	    var longitude = event.latLng.lng();
    	    
    	    var info = {
                    city : 'Clickie Marker!',
                    desc : 'Zoom!',
                    lat : latitude,
                    long : longitude
                }
    	    createMarker(info);

    	}); 
      	
      	
	    var infoWindow = new google.maps.InfoWindow();
	    

	    function addMarkers(){
		    for (var i = 0; i < cities.length; i++){
		        createMarker(cities[i]);
		    }
	    }
	    
	    
	    function createMarker(info){
	    	
	    	var thisIndicator = false;
	    	
   
	        var marker = new google.maps.Marker({
	            map: vm.map,
	            position: new google.maps.LatLng(info.lat, info.long),
	            title: info.city
	        });
	        
	        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
	        

	        google.maps.event.addListener(marker, 'click', function(){
	        	thisIndicator = true;
	            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
	            infoWindow.open(vm.map, marker);
	        });

	        google.maps.event.addListener(marker, "mouseover", function (event) {
	        	infoWindow.open(vm.map, marker);
	       	    
	       	}); 

	        google.maps.event.addListener(marker, "mouseout", function (event) {
	        	
	        	if(!thisIndicator){
	        		infoWindow.close(vm.map, marker);
	        	}
	        	
	       	    
	       	}); 

	        
	        vm.markers.push(marker);   
	    }  
	    

	    function openInfoWindow(e, selectedMarker){
	        e.preventDefault();
	        google.maps.event.trigger(selectedMarker, 'click');
	    }
    
	    
	   addMarkers();
	    

	}

})();