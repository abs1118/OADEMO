var previewApp = angular.module("previewApp", []);
previewApp.directive("previewDrective", function() {
	return {
		scope : {
			files : '='
		},
		restrict : 'E',
		controller : [ '$rootScope', '$scope', '$state','ngDialog','$timeout',
				function($rootScope, $scope, $state,ngDialog,$timeout) {
						
					$scope.detailFile = function(file)
					{
						var fileStr=file.NowName;
						var fileUrl = $rootScope.attachmentURL +"/"+ fileStr;
						var start = fileStr.indexOf(".");
						var end = fileStr.length;
						var type=fileStr.substring(start+1,end);
						if(type!='BMP'&&type!='bmp'&&type!='JPG'&&type!='jpg'&&type!='JPEG'&&type!='jpeg'&&type!='PNG'&&type!='PNG'&&type!='GIF'&&type!='gif')
						{
							if($rootScope.systemType == "android")
							{
								window.PreviewPlugin(fileUrl, function(echoValue) {  
								});  
							}
							else
							{
								ngDialog.open({
                                    template: 'home/js/preview/iosloading.html',
                                    className: '',
                                    showClose:false,
                                    closeByEscape : true,
                                    controller : ['$scope','$state',function($scope,$state){
                                                  $scope.personalLoading=true;
                                              }],
                                    scope: $scope,
                                    plain : false
                                });
                      
                               $timeout(function()
                               {
                      
                                      MyIOSPlugin.nativeFunction("print",[fileUrl],function(result)
                                      {
	                                       $scope.personalLoading=true;
	                                       ngDialog.closeAll();
                                      },function(error)
                                      {
                                    	  // alert("Error: \r\n"+error);
                                      });
                                      
                                       ngDialog.closeAll();
                                       
                                },1000);
								
							}
						}
						else
						{
							navigator.notification.alert('预览的格式不正确', '','提示', '确认');
						}
					};
					$scope.removeFile = function(file) {
						var index = $scope.files.indexOf(file);
						if (index > -1) {
							$scope.files.splice(index, 1);
						}
					};
				} ],
		templateUrl : "base/home/js/preview/previewtmpl.html"

	};
});