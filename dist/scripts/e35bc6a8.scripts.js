"use strict";angular.module("adlibsApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("adlibsApp").controller("MainCtrl",["$scope",function(a){a.madlibs=a.adlib,a.gender={male:{valid:!1,his:"his",him:"him",he:"he"},female:{valid:!1,her:"her",she:"she"}},a.clickMale=function(){a.gender.male.valid=!0,a.gender.female.valid=!1},a.clickFemale=function(){a.gender.male.valid=!1,a.gender.female.valid=!0},a.form=!0,a.submit=function(){console.log(a.adlib),a.story=!0,a.form=!1},a.reset=function(){a.story=!1,a.form=!0,a.madlibs=a.adlibs}}]);