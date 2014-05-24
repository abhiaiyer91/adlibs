'use strict';

angular
  .module('adlibsApp', [
    'ngRoute', 'ngAnimate', 'ngAnimate-animate.css'
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
