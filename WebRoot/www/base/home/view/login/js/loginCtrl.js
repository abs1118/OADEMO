
var loginCtrl = angular.module('oaControllers', []);
loginCtrl.controller("LoginController", [ '$rootScope','$scope', '$http','$state','$resource','LoginService', function($rootScope,$scope, $http,$state,$resource,LoginService) {
	$rootScope.wsUserName='admin';
	$rootScope.wsPassWord='123456';
	$scope.hasUsername = true;
	$scope.hasPassword = true;
	if(window.localStorage.getItem("username")!=''&&window.localStorage.getItem("username")!=null){
		var str_username = window.localStorage.getItem("username");
		var str_password = window.localStorage.getItem("password");
		//var str_serviceURL = window.localStorage.getItem("serviceURL");
		$scope.username=str_username;
		$scope.password=str_password;
		//$scope.serviceURL=str_serviceURL;
		$scope.rememberMe=true;
	}
	
	
	$scope.loginCheck=function()
	{
		$scope.loginSuccess=false;
		$rootScope.pageSize='5';
		$rootScope.username = $scope.username;
		$rootScope.password = $scope.password;
		$rootScope.serviceURL ="http://www.123.com";//window.localStorage.getItem("serviceURL");
		$rootScope.attachmentURL="http://www.123.com";//window.localStorage.getItem("attachmentURL");
		
		var username=$scope.username;
		var password=$scope.password;
		var ifRemember=$scope.rememberMe;
		var hasNull = false;
		if((username=='')&&(password!='')){
			
			showToast("请输入用户名");
			//$scope.hasUsername = false;
			hasNull = true;
		}
		else{
			$scope.hasUsername = true;
		}
		if((password=='')&&(username!='')){
			
			showToast("请输入密码");
			//$scope.hasPassword = false;
			hasNull = true;			
		}
		else{
			$scope.hasPassword = true;
		}
		
		if((username=='')&&(password==''))
		{
			showToast("请输入用户名和密码");
			hasNull = true;
		}
		
		if(hasNull){
			return;
		}
		if(ifRemember){
			window.localStorage.setItem("username",username);
		    window.localStorage.setItem("password",password); 
		   
		}else{
			window.localStorage.clear();
		}
		var hashStr=password+ new Date().Format("yyyy-MM-dd");
		var hashPassword=hex_md5(hashStr);
		
		var successFn = function(data){
			if(data.Result=='True')
 			{
 				$state.go('main');
 				window.RelationChannelPlugin($rootScope.username,function(){
 					
 				});
 			}else{
 				showToast("用户名或密码错误");
 				//$scope.errorInfo="用户名或密码错误";
 				$scope.password='';
 			}
		};
		
		var errorFn = function(data){
			navigator.notification.alert('登录失败,请检查网络是否中断或路径是否正确!', null,'提示', '确认');
 			$state.go('login');
		};
		
		if($rootScope.serviceURL == "" || $rootScope.serviceURL == null
			||$rootScope.attachmentURL == "" ||$rootScope.attachmentURL == null)
		{
			navigator.notification.alert('请设置登录地址与附件地址!', null,'提示', '确认');
		}
		else
		{
			LoginService.login($rootScope,$scope,$http,username,hashPassword,successFn,errorFn);
		}
	};

}]);

function setUrlCtrl($scope,$rootScope)
{
	$scope.serviceURL=window.localStorage.getItem("serviceURL");
	$scope.attachmentURL=window.localStorage.getItem("attachmentURL");

	$scope.saveUrl=function()
	{
		var newServiceURL=$scope.serviceURL;
		var newAttachmentURL=$scope.attachmentURL;
	    if(newServiceURL!=null&&newServiceURL!='')
	    {
	    	 window.localStorage.setItem("serviceURL",newServiceURL); 
	    }else{
	    	
	    }
	    if(newAttachmentURL!=null&&newAttachmentURL!='')
	    {
	    	 window.localStorage.setItem("attachmentURL",newAttachmentURL); 
	    }else{
	    	
	    }
	};
}

