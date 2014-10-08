'use strict';

/**
 * @ngdoc function
 * @name memoryLeakApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the memoryLeakApp
 */
angular.module('memoryLeakApp')
  .controller('GridNoOptionsCtrl', function ($scope) {
    
    $scope.gridOptions = {
      columnDefs: [ { name: 'col1' }, { name: 'col2' } ],
      data: [
        { col1: 1, col2: 2 },
        { col1: 3, col2: 4 },
      ]
    };
    
  });
