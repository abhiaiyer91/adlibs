'use strict';

angular.module('adlibsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.adlib = 
    	{
    		name: 'Abhi Aiyer',
    		dirty: 'Dirty Task',
    		obnox: 'Kanye West',
    		job: 'Web Developer',
    		celebrity: 'George Clooney',
    		bignumber: 0,
    		tedious: 'Padding & Margins',
    		useless: 'Basket Weaving',
    		adj: 'Gigantic'

    	};

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

  });
