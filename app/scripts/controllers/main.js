'use strict';

/**
 * @ngdoc function
 * @name memoryLeakApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryLeakApp
 */
angular.module('memoryLeakApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
