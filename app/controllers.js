'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('ViewOneCtrl', ['$scope',
  function($scope) {
    $scope.view = 1;
  }]);

appControllers.controller('ViewTwoCtrl', ['$scope',
  function($scope) {
      $scope.view = 2;
  }]);
