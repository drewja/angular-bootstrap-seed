'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'appControllers',
  'myApp.version'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
      when('/viewone', {
        // when deployed with nginx as the root app, 
        // templateUrl should be '/view1/view1.html'
        templateUrl: 'view1/view1.html',
        controller: 'ViewOneCtrl'
      }).
  when('/viewtwo', {
    templateUrl: 'view2/view2.html',
        controller: 'ViewTwoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });


        //check browser support
        if(window.history && window.history.pushState){
            //enable html5mode
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
        };
}])

