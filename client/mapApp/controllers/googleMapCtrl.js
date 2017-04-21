(function () {
    'use strict';
    
	angular.module('mapApp').controller('googleMapCtrl', googleMapCtrl);
                                                       
	googleMapCtrl.$inject = ['$scope', 'newsEventSvc'];

	function googleMapCtrl($scope, newsEventSvc) {
	
		var vm = this;
		vm.openInfoWindow = openInfoWindow;
		vm.setCenter = setCenter;
		vm.panToEvent = panToEvent;
		vm.hideEvent  = hideEvent;
		
	    var Syria_Aleppo = {lat: 36.215719, lng: 37.158996};
	    var random = {lat: 36.215719, lng: 38.158996};
	    
	    if($scope.newsEvents == null || $scope.newsEvents.length == 0){
	    	loadNewsEvents();
	    }
	    
        function loadNewsEvents(){

        	newsEventSvc.getEvents().then(function (data) {

        		console.log(data);
        		
        		$scope.newsEvents = data;
        		
	        }, function (err) {
	        	
	               console.log(err);
	        });

        }
        
        
	    var mapOptions = {
	            zoom: 8,
	            center: new google.maps.LatLng(Syria_Aleppo),
	            mapTypeId: google.maps.MapTypeId.TERRAIN,
	            
	            mapTypeControl: true,
	            mapTypeControlOptions: {
	                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	                position: google.maps.ControlPosition.BOTTOM_CENTER
	            },
	            zoomControl: true,
	            zoomControlOptions: {
	                position: google.maps.ControlPosition.RIGHT_BOTTOM
	            },
	            scaleControl: true,
	            streetViewControl: false,
	            streetViewControlOptions: {
	                position: google.maps.ControlPosition.LEFT_TOP
	            },
	            fullscreenControl: false
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
	    
	    
	    function createMarker(newsEvent){
	    	
	    	var thisIndicator = false;
	    	
   
	        var marker = new google.maps.Marker({
	            map: vm.map,
	            position: new google.maps.LatLng(newsEvent.lat, newsEvent.long),
	            title: newsEvent.city
	        });
	        
	        marker.content = '<div class="infoWindowContent">' + newsEvent.desc + '</div>';
	        

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

	        newsEvent.marker = marker;
	        
	        vm.markers.push(marker);   
	    }  
	    

	    function openInfoWindow(e, selectedMarker){
	        e.preventDefault();
	        google.maps.event.trigger(selectedMarker, 'click');
	    }
    
	    function panToEvent(newsEvent){
	    	vm.map.panTo(new google.maps.LatLng(newsEvent.lat, newsEvent.long));
	    }
	    
	    function hideEvent(newsEvent){
			newsEvent.hidden = true;
			hideMarker(newsEvent);
	    }
	    
	    function hideMarker(newsEvent){
	    	console.log(vm.markers);
	    	vm.markers.splice(getObjLoc(newsEvent, vm.markers), 1);
	    	console.log(newsEvent.marker);
	    }
	    
	    function getObjLoc(obj, array){
	    	for(var x=0; x<array.length; x++){
	    		console.log(array[x].$$hashKey+" : "+obj.$$hashKey);
	    		if(array[x].$$hashKey == obj.$$hashKey){
	    			console.log("match");
	    			console.log(array[x]);
	    			return x;
	    		}
	    	}
	    }
	    
	    
	    function setCenter(event){
	    	vm.map.setCenter(new google.maps.LatLng(event.lat, event.long));
	    }
	    

	    if($scope.newsEvents && $scope.newsEvents.length > 0){
	    	addMarkers();
	    }
	   
	    

	}

})();