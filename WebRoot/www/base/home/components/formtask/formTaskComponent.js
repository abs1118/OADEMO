angular.module('FormTaskApp',[])
	.directive('taskForm',function(){
		return {
			restrict : 'EA',
			replace : true,
			scope : {
				taskForms : '='
			},
			controller : function($scope,$element,$attrs){
			},
			templateUrl : 'base/home/components/formtask/formTaskComponent.html'
		};
	});