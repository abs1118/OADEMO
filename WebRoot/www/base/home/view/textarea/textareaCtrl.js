

var textereaCtrl = angular.module('TextereaModule', []);

textereaCtrl.controller("TextereaController", [ '$rootScope','$scope', '$http','$state','$resource', function($rootScope,$scope, $http,$state,$resource) {
	
	
	$scope.ddd="ssssssdddddddddddddddddddddddddddddddddddddddddd";
   $scope.test=	function()
   {
	   alert($scope.ddd);
   } 
}]);

