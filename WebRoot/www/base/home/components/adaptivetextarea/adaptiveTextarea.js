var adaptiveTextareaApp = angular.module("adaptiveTextareaApp",[]);
adaptiveTextareaApp.directive("adaptiveTextarea",function()
{
	return{
		restrict:'E',
		scope:{
			rows:'@',
			readonly:'@',
			modelvalue:'='
			
		},
		 link: function (scope, element, attrs) {
			 scope.$watch("modelvalue", function () {
				 scope.rows=1;
				 if(scope.modelvalue!=null&&scope.modelvalue!='')
					{
						 var length=jmz.GetLength(scope.modelvalue);
						 var rows=length%34==0?length/34:length/34+1;
						 scope.rows=rows;
						// $scope.model=$scope.textvalue;
					}
				  });
		    },
		controller:['$rootScope','$scope','$state',function($rootScope,$scope,$state)
		{
			var sss=document.getElementById("test");
		    $scope.cols=sss.offsetWidth;
			
		}],
		
		templateUrl:"base/home/components/adaptivetextarea/adaptivetextarea.html"
		//replace: true
		
	};
});

var jmz = {};
jmz.GetLength = function(str) {
	///获得字符串实际长度，中文2，英文1
	///要获得长度的字符串
	var realLength = 0, len = str.length, charCode = -1;
	for (var i = 0; i < len; i++) {
	charCode = str.charCodeAt(i);
	if (charCode >= 0 && charCode <= 128)
	realLength += 1;
	else realLength += 2;
	}
	return realLength;
};
