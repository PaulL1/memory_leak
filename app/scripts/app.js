'use strict';

/**
 * @ngdoc overview
 * @name memoryLeakApp
 * @description
 * # memoryLeakApp
 *
 * Main module of the application.
 */
angular
  .module('memoryLeakApp', [
//    'ngAnimate',
    'ngRoute',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/noGrid', {
        templateUrl: 'views/noGrid.html',
        controller: 'NoGridCtrl'
      })
      .when('/gridNoOptions', {
        templateUrl: 'views/gridNoOptions.html',
        controller: 'GridNoOptionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
