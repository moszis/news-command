(function () {
    'use strict';
    
	angular.module('mapApp').controller('googleMapCtrl', googleMapCtrl);
                                                       
	googleMapCtrl.$inject = ['$scope', 'newsEventSvc'];

	function googleMapCtrl($scope, newsEventSvc) {
	
		var vm = this;
		vm.openInfoWindow = openInfoWindow;
		vm.setCenter = setCenter;
		vm.panToEvent = panToEvent;

	    var Syria_Aleppo = {lat: 36.215719, lng: 37.158996};
	    var random = {lat: 36.215719, lng: 38.158996};
	    
	    vm.events = newsEventSvc.getEvents();
        
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
		    for (var i = 0; i < $scope.newsEvents.length; i++){
		        createMarker($scope.newsEvents[i]);
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
    
	    function panToEvent(event){
	    	vm.map.panTo(new google.maps.LatLng(event.lat, event.long));
	    }
	    
	    
	    function setCenter(event){
	    	vm.map.setCenter(new google.maps.LatLng(event.lat, event.long));
	    }
	    
	    if($scope.newsEvents && $scope.newsEvents.length > 0){
	    	addMarkers();
	    }
	   
	    

	}

})();