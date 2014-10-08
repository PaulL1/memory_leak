'use strict';

/**
 * @ngdoc function
 * @name memoryLeakApp.controller:NoGridCtrl
 * @description
 * # NoGridCtrl
 * Controller of the memoryLeakApp
 */
angular.module('memoryLeakApp')
  .controller('NoGridCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
