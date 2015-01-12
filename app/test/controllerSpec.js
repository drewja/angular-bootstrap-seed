'use strict';

describe('myApp controllers', function() {

  describe('ViewOneCtrl', function(){
    beforeEach(module('myApp'));
    
    beforeEach(inject(function($controller, $rootscope) {
      VOneCtrl = $controller('ViewOneCtrl');
      scope = $rootScope.$new();
      
      it('should expect ViewOneCtrl to be defined ', function(){
          expect(VOneCtrl).toBeDefined();
      });
      
      it('should expect view variable to equal 1 ', function(){
          expect(scope.view).toEqual(1);
      });
    
    }));
  });
     
  describe('ViewTwoCtrl', function(){
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $rootscope) {
      VTwoCtrl = $controller('ViewTwoCtrl');
      scope = $rootScope.$new();
      
      it('should expect ViewTwoCtrl to be defined ', function(){
          expect(VTwoCtrl).toBeDefined();
      });
      
      it('should expect view variable to equal 2 ', function(){
          expect(scope.view).toEqual(2);
      });
      
    }));
  });
});
