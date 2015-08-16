var demoApp = angular.module('DemoModule', []);

demoApp.controller("DemoController", [ '$rootScope','$scope', '$http','$state','$resource','DemoService', function($rootScope,$scope, $http,$state,$resource,DemoService) {
	$scope.searchIsShow = false;
	$scope.demoLoading = true;
	$scope.loadMoreLabel = "加载更多...";
	$scope.myClass="loadMoreData";
	$scope.pageIndex=rememberState.pageIndex;
	
	$scope.demoParams = {
			 "pageSize": 5,
			 "pageIndex":"1",
			 };
	
	if($scope.pageIndex!=1)
	{
		$scope.demoParams.pageSize=$scope.pageIndex*$rootScope.pageSize;
		
	}
	else
	{
		//干点什么
	}
	var successFn=function(resultDatas)
	{
		
		if($scope.demos == null)
		{
			$scope.demos = resultDatas;
			$scope.recordCount = resultDatas.length;
			$scope.demoLoading = false;
		}
		else
		{
			/*if (resultDatas.dtResult!=''&&resultDatas.dtResult!=null) {
				$scope.coustomeres = $scope.coustomeres.concat(resultDatas.dtResult);
			}
			else
			{
				
			}*/
			$scope.loadMoreLabel = "加载更多...";
			$scope.myClass="loadMoreData";
		}
		
	};
	
	var errorFn=function(error) 
	{  
		showAlert('加载数据失败，请检查网络!', null,'提示', '确认');
		
	};
	DemoService.getDemoList($rootScope,$scope,$http,$state,successFn,errorFn);
	
	//监听指令repeatFinish
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {//5
        //下面是在页面加载完成之后 render完成后执行的js
    	if(rememberState.toTop!=0)
    	{
    		$("#content").scrollTop(rememberState.toTop);
    	}
    	
    });
	
	$scope.itemClick = function(demo,url)
	{
		if($scope.pageIndex==1) 
		{
			rememberState.pageIndex=$scope.demoParams.pageIndex;
		}
		else
		{
			rememberState.pageIndex=$scope.pageIndex;
		}
		var element=document.getElementById("content");
		var totop = element.scrollTop;
		rememberState.toTop=totop;
		$state.go(url, {demoId: demo.id});
	};
	
	$scope.loadMoreData = function()
	{
		$scope.demoParams.pageSize=$rootScope.pageSize;//6
		if(parseInt($scope.demoParams.pageIndex) < ($scope.recordCount/parseInt($scope.demoParams.pageSize)))
		{
			$scope.loadMoreLabel = "加载中...";
			$scope.myClass="loadMoreData dataLoading";
			
			$scope.demoParams.pageIndex = parseInt($scope.pageIndex)+1;
			$scope.pageIndex=$scope.demoParams.pageIndex;
			var element=document.getElementById("content");
			var totop = element.scrollTop;
			rememberState.toTop=totop;
			
			DemoService.getDemoList($rootScope,$scope,$http,$state,$scope.demoParams);
		}
		else
		{
			showToast("数据已经是最后一条");
			//navigator.notification.alert('数据已经是最后一条!', null,'提示', '确认');
		}
	};
	//执行相关操作	
	$scope.addDemoFn = function(){
		rememberState.toTop=0;
		$state.go("main.demo.addDemo");
	};
	
	$scope.operators = [{"name":"添加","class":"menuAddIcon",operatorFunction:$scope.addDemoFn}];
	
    $scope.searchCustomer = function(e){
        var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
          // console.info("");
        }
    };
    
}]);

demoApp.controller("AddDemoController", [ '$rootScope','$scope', '$http','$state','$resource', function($rootScope,$scope, $http,$state,$resource) {
	
	 $scope.demo= {time:'sss'};  
	   $scope.birthDay='2222';
	    $scope.save = function() {  
	        alert( $scope.birthDay);
	    };  
	
}]);

demoApp.controller("DemoDetailController", [ '$rootScope','$scope', '$http','$state','$stateParams','$resource', function($rootScope,$scope, $http,$state,$stateParams,$resource) {

	 
	getCustomerMode($rootScope,$scope,$http,$state,$stateParams.customerId);
	
	$scope.isEdit = false;
    $scope.SupplysName={disable: true};
	$scope.Serils={disable: true};
	$scope.JianCheng={disable: true};
	$scope.DianHua={disable: true};
	$scope.MobTel={disable: true};
	
	$scope.ChuanZhen={disable: true};
	$scope.URLStr={disable: true};
	
	$scope.DiQu={disable: true};
	$scope.EmailStr={disable: true};
	$scope.YouBian={disable: true};
	$scope.Address={disable: true};
	$scope.KaiHuHang={disable: true};
	$scope.ZhangHao={disable: true};
    $scope.BackInfo={disable: true};
	$scope.saveBtn={show: false};
	
	$scope.editeCustomerCenterFn = function()
	{
		hideNavOpr();
		$scope.isEdit = true;
		if($scope.SupplysName.disable)
		{
			$scope.showAndHideDisable();
		}
		else
		{
			
		}
	};
	$scope.operators=[{"name":"编辑",operatorFunction:$scope.editeCustomerCenterFn}];
	
	$scope.customer={SupplysName:'',
			Serils:'',
			JianCheng:'',
			DianHua:'',
			MobTel:'',
			ChuanZhen:'',
			URLStr:'',
			EmailStr:'',
			DiQu:'',
			YouBian:'',
			Address:'',
			KaiHuHang:'',
			ZhangHao:'',
			BackInfo:''};
	$scope.customer.TimeStr= new Date().Format("yyyy-MM-dd hh:mm:ss");
	$scope.customer.UserName=$rootScope.username;
	 $scope.customer.id=$stateParams.customerId;
	
	 
	 $scope.updateCustomer=function(customer)
	 {
		$scope.customer.wsUserName=$rootScope.wsUserName;
		$scope.customer.wsPassWord=$rootScope.wsPassWord;
		
		saveOrUpdateCustomerInfo($rootScope,$http,$state,"UpdateSupply",customer);
	};
	$scope.cancelUpdate = function(){
		showNavOpr();
		$scope.isEdit = false;
		$scope.showAndHideDisable();
	};
	 $scope.showAndHideDisable=function()
		{
			$scope.SupplysName.disable=!$scope.SupplysName.disable;
			$scope.Serils.disable=!$scope.Serils.disable;
			$scope.JianCheng.disable=!$scope.JianCheng.disable;
			$scope.DianHua.disable=!$scope.DianHua.disable;
			$scope.MobTel.disable=!$scope.MobTel.disable;
			$scope.ChuanZhen.disable=!$scope.ChuanZhen.disable;
			$scope.URLStr.disable=!$scope.URLStr.disable;
			$scope.DiQu.disable=!$scope.DiQu.disable;
			$scope.EmailStr.disable=!$scope.EmailStr.disable;
			$scope.YouBian.disable=!$scope.YouBian.disable;
			$scope.Address.disable=!$scope.Address.disable;
			$scope.KaiHuHang.disable=!$scope.KaiHuHang.disable;
			$scope.ZhangHao.disable=!$scope.ZhangHao.disable;
		    $scope.BackInfo.disable=!$scope.BackInfo.disable;
			$scope.saveBtn.show=!$scope.saveBtn.show;
		};
	
    
}]);

