angular.module('demoApp', [])
     .factory('DemoService',function() {
	    	return {
		         getDemoList:function(rootScope,scope,http,state,successFn,errorFn) {
		    			
		    			//var url=rootScope.serviceURL+"/SupplyService.asmx/GetSupplyList";
		    			var url='testdata/demo.json';
		    			http.get(url,{}).success(successFn).error(errorFn);
		        	 
		    		 }
		
	         };
      });
	
/*function deleteMySchedules(rootScope,scope,http,state,myScheduleIds)
{
		
	var url=rootScope.serviceURL+"/RiChenService.asmx/DeleteRiChen";
	http.get(url,{params:{"wsUserName":rootScope.wsUserName, "wsPassWord": rootScope.wsPassWord,"idList":myScheduleIds}},{})
	.success(function(data)
	{
		if(data.Count>0)
		{
			console.info("删除成功");
			state.go("main.mtschedules");
		}else
		{
			console.info("删除失败");
		}
			
	}).error(function(error) 
	{   
		
		
	});

}*/


/*function saveOrUpdateCustomerInfo(rootScope,http,state,methodName,customer)
{
		
	var url=rootScope.serviceURL+"/SupplyService.asmx/"+methodName;
	http.post(url,customer)
	.success(function(data)
	{
		if(data.Count){
			showToast("保存成功");
			state.go('main.customercenter');
		}else{
			navigator.notification.alert('保存数据失败!', null,'提示', '确认');
			
		}
			
	}).error(function(error) 
	{   
		navigator.notification.alert('保存数据失败，请检查网络!', null,'提示', '确认');
		
	});

}

function getCustomerMode(rootScope,scope,http,state,customerId)
{
		
	var url=rootScope.serviceURL+"/SupplyService.asmx/GetSupplyMode";
	http.get(url,{params:{"wsUserName":rootScope.wsUserName, "wsPassWord": rootScope.wsPassWord,"id":customerId}},{})
	.success(function(data)
	{
		
	   scope.customer=data.dtResult[0];
			
	}).error(function(error) 
	{   
		navigator.notification.alert('加载数据失败，请检查网络!', null,'提示', '确认');
		
	});

}
*/