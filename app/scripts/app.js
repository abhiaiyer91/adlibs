

(function(window){
'use strict';

window.Abhi = angular
  .module('adlibsApp', [
    'ngRoute', 'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}(window));



