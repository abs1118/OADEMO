var chooseUserApp = angular.module("chooseUserApp",[]);
chooseUserApp.directive("chooseUserDrective",function()
{
	return{
		scope:{
			users:'=',
			selectUserNames:'=',
			selectTrueNames:'=',
			propertyName:'@'
		},
		restrict:'E',
		controller:['$rootScope','$scope','$state',function($rootScope,$scope,$state)
		{
			$scope.getData = function()
			{
				if($scope.users != null && $scope.users.length > 0)
				{
					for(var i = 0; i < $scope.users.length; i++) 
					{
						$scope.users[i].checked=false;
					}
					$scope.showDeptAndUserList();
				}
			};
			
			//获得下一级数据
			$scope.getNextData=function(deptOrUser){
				$scope.user=deptOrUser;
				var showData = [];  
				var isUser=false;
			    angular.forEach($scope.users, function(v,k)
			    {  
			    	if(deptOrUser.BuMenType=='-1')
			    	{
			    		isUser=true;
			    		return;
			    	}
			         if (v.pId==deptOrUser.id)
			         {  
			        	 showData.push(v);  
			         } 
			    });  
			    if(!isUser)
			    {
			    	if(showData==null||showData=='')
			    	{
			    		return;
			    	}else
			    	{
			    		$scope.deptAndUsers=showData;
			    		$scope.user= $scope.deptAndUsers[0];
			    	}
			    }
			};
			
			//返回到上一级
			$scope.goPrePage=function(user){
				if(user != undefined && user != null){
					var showData = [];  
					var preDeptAndUser={};
					var isFirst=false;
					for ( var i = 0; i < $scope.users.length; i++) 
					{
						if($scope.users[i].id==user.pId){
							preDeptAndUser=$scope.users[i];
							isFirst=false;
							break;
						}else
						{
							isFirst=true;
						}
					}
				    angular.forEach($scope.users, function(v,k)
				    {  
				    	
				         if (v.pId==preDeptAndUser.pId)
				         {  
				        	 showData.push(v);  
				         }  
				    }); 
				    
				   if(!isFirst)
				   {
					   $scope.deptAndUsers=showData;
					   $scope.user= $scope.deptAndUsers[0];
				   }
				}
			};
			
			//默认展示第一级数据
			$scope.showDeptAndUserList=function()
			{
				var deptOrUserList=[];
				for ( var i = 0; i < $scope.users.length; i++) 
				{
					
					if($scope.users[i].pId=='0')
					{
						deptOrUserList.push($scope.users[i]);
					}
				}
				$scope.deptAndUsers=deptOrUserList;
			};
			
			//检查是否需要勾选
			$scope.chkDeptOrUser=function(deptOrUser){
				if(!deptOrUser.checked)
				{
					if(deptOrUser.pId=='0')
					{
						downSelectCheckBox(deptOrUser,true);

					}else 
					{
						upSelectCheckBox(deptOrUser);
						downSelectCheckBox(deptOrUser,true);
						
					}
				}else{
					if(deptOrUser.pId=='0')
					{
						downSelectCheckBox(deptOrUser,false);
						
					}else
					{
						upCancelSelectCheckBox(deptOrUser);
						downSelectCheckBox(deptOrUser,false);
					}
				}
			};
			
			//往上找取消勾选
			var upCancelSelectCheckBox=function(user)
			{
				var isExist=false;
				for ( var i = 0; i < $scope.users.length; i++) 
				{
					if($scope.users[i].pId==user.pId&&$scope.users[i].id!=user.id)
					{
						if($scope.users[i].checked)
						{
							isExist=true;
							break;
						}
					}
				}
				if(!isExist)
				{
					for ( var j = 0; j < $scope.users.length; j++) 
					{
						if($scope.users[j].id==user.pId)
						{
							$scope.users[j].checked=false;
							upCancelSelectCheckBox($scope.users[j]);
							break;
						}
					}
					
				}
			};
			
			//往上找选中
			var upSelectCheckBox=function(user)
			{
				for ( var i = 0; i < $scope.users.length; i++) {
					if($scope.users[i].id==user.pId)
					{
						$scope.users[i].checked=true;
						upSelectCheckBox($scope.users[i]);
						break;
					}
				}
			};
			
			//往下找（取消或选中）
			var downSelectCheckBox=function(user,isSelect)
			{
				for ( var i = 0; i < $scope.users.length; i++) 
				{
					if($scope.users[i].pId==user.id)
					{
						$scope.users[i].checked=isSelect;
						downSelectCheckBox($scope.users[i],isSelect);
						
					}
				}
			};
			
			//确认
			$scope.save=function()
			{
				if($scope.propertyName == undefined || $scope.propertyName ==""){
					$scope.propertyName = "name";
				}
				var names="";
				var userNames='';
				for ( var i = 0; i < $scope.users.length; i++) 
				{
					if($scope.users[i].checked&&$scope.users[i].BuMenType=='-1')
					{
						names+=$scope.users[i][$scope.propertyName]+",";
						userNames+=$scope.users[i]['UserName']+",";
						
					}
				}
				names=names.substring(0, names.length-1);
				userNames=userNames.substring(0, userNames.length-1);
				
				$scope.selectUserNames=names;
				$scope.selectTrueNames=userNames;
			};
		}],
		templateUrl:"base/home/components/chooseuser/chooseusertmpl.html"
		
	};
});