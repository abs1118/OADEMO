var loginCtrl = angular.module('oaControllers', [])
	.factory('LoginService',function(){
		return {
			login : function(rootScope,scope,http,username,password,successFn,errorFn){
				// console.info("进入登录服务");
//		 		var url=rootScope.serviceURL+"/UserOrgService.asmx/VerificationLogin";
//		 		http.get(url,{params:{"wsUserName":rootScope.wsUserName, "wsPassWord": rootScope.wsPassWord, "userName":username, "pwd": password}},{})
//		 		.success(successFn).error(errorFn);
				scope.$state.go('main');
			}
		};
	});	