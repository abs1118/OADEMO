var headerApp = angular.module("headerApp",[]);
headerApp.directive("headerDrective",function()
{
	return{
		scope:{
			titleddd:'@',
			returntstate:'@',
			searchShowOrHide:'@',
			returntfunction:'&',
			operators:'=',
			searchIsShow:'='
		},
		restrict:'E',
		controller:['$rootScope','$scope','$state',function($rootScope,$scope,$state)
		{
			$scope.Ui = $rootScope.Ui;
			$scope.menu={show: true};
			$scope.searchIconShow=false;
			if($scope.searchShowOrHide!=undefined){
				$scope.searchIconShow=$scope.searchShowOrHide;
			}
			
			$scope.returnStateClick = function()
			{
				if($scope.returntfunction != null)
				{
					$scope.returntfunction();
				}
				if($scope.returntstate != null)
				{
					$state.go($scope.returntstate);
				}
			};
			
			$scope.opratorClick = function(index)
			{
				var oprator = $scope.operators[index];
				oprator.operatorFunction();
			};

	
			
			if($scope.operators==null||$scope.operators==''){
				$scope.menu.show=!$scope.menu.show;
			}
			else
			{ 
				 $scope.operators.forEach(function(operator){  
					 
					 if(operator["class"] == undefined)
					 {
						 if(operator.name.indexOf("添加") >=0||operator.name.indexOf("新建") >=0)
						 {
							 operator["class"]="menuAddIcon";
						 }else if(operator.name.indexOf("删除") >=0||operator.name.indexOf("删除") >=0)
						 {
							 operator["class"]="menuDelIcon";
						 }else if(operator.name=="编辑")
						 {
							 operator["class"]="menuEditIcon";
						 }else 
						 {
							 operator["class"]="";
						 }
					 }
				}) 
			}
			
			$scope.searchShow = function()
			{
				if($scope.searchIsShow == true)
				{
					$scope.searchIsShow = false;
				}
				else if($scope.searchIsShow == false)
				{
					$scope.searchIsShow = true;
				}
			};
		}],
		templateUrl:"base/home/components/header/headertmpl.html"
		
	};
});