var mainAPP = angular.module('mainAPP', []);
loginCtrl.controller("MainController", [ '$rootScope','$scope', '$http','$state','$resource', function($rootScope,$scope, $http,$state,$resource) {
	$scope.onExitKeyDown = function()
	{
		 navigator.notification.confirm(
			        '按确定退出程序!',  
			        onConfirm,              
			        '确定要退出程序吗?',       
			        '确定,取消'      
			    );
	};
	
	$scope.onLoginout = function()
	{
		navigator.notification.confirm(
		        '按确定注销登录!',  
		        onLoginoutConfirm,              
		        '确定要注销登录吗?',       
		        '确定,取消'      
		    );
	};
	
	//确定框
	function onConfirm(button) 
	{
		if($rootScope.systemType =="android")
		{
			if(button==1) navigator.app.exitApp(); //选择了确定才执行退出
		}
		else
		{
			if(button==1){
				OutIOSPlugin.nativeFunction("outSystem",["outSystem"],function(result) 
				{
					// alert("Success: \r\n"+result);
				},function(error) 
				{
					// alert("Error: \r\n"+error);
				});
			}
		}
	} 

	//注销登录
	function onLoginoutConfirm(button)
	{
		 if(button==1)
		 {
		 	 $state.go('login');
			 navigator.app.clearHistory();
		 }
	}
	
}]);

