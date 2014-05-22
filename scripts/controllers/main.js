'use strict';

angular.module('adlibsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.madlibs = $scope.adlib;

    $scope.gender = 
    	{
    		male: 
    		{
    			valid: false,
    			his: 'his',
    			him: 'him',
    			he: 'he'
    		},
    		female: 
    		{
    			valid: false,
    			her: 'her',
    			she: 'she'  			
    		}
    		
    	}

   $scope.clickMale = function (){
   		$scope.gender.male.valid = true;
   		$scope.gender.female.valid = false;
   };

   $scope.clickFemale = function (){
   		$scope.gender.male.valid = false;
   		$scope.gender.female.valid = true;
   };

   $scope.form = true;

   $scope.submit = function () {
      console.log($scope.adlib);
      $scope.story = true;
      $scope.form = false;
   }

   $scope.reset = function (){
      $scope.story = false;
      $scope.form = true;
      $scope.madlibs = $scope.adlibs;
   }

  });
