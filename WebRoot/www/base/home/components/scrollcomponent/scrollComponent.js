angular.module('ScrollComponentApp',[])
	.directive('scrollComponent',['$drag',function($drag){
		return {
			restrict : 'EA',
			replace : true,
			transclude : true,
			scope : {
				loadMoreData : '&',
				loadMoreLabel : '@',
				myClass : '@'
			},
			require : 'scrollableContent',
			
			controller : function($scope,$element,$attrs){
			},
			
			link : function(scope,element,attrs,scrollableContentCtrl){
			},
			
			templateUrl : 'base/home/components/scrollcomponent/scrollComponent.html'
		};
	}]);