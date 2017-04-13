'use strict';

describe('mapApp module', function() {

  beforeEach(module('mapApp'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var mapCtrl = $controller('googleMapCtrl');
      expect(googleMapCtrl).toBeDefined();
    }));

  });
});