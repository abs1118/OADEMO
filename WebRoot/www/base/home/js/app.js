define(['angularAMD', 'mobileAngularUI','mobileAngularUIGestures','angularUIRouter',
        'angularResource','header','angularAnimate','mobileAngularuiCore','scrollComponent',
        'taskFormComponent','mobileAngularUIComponents','angularfileupload','ngIscroll','scroll',
        'uploadFiles','chooseuser','adaptivetextarea','previwe','datetimePicker','ngfileupload','finishRender'], 
function (angularAMD) {
	var app = angular.module("app", [ 'ui.router','ngResource',  'mobile-angular-ui', 'headerApp',
	                        'ngAnimate', 'mobile-angular-ui.gestures', 'mobile-angular-ui.core.fastclick',
	                        'mobile-angular-ui.core.sharedState','mobile-angular-ui.core.outerClick',
	                        'mobile-angular-ui.core.activeLinks', 'mobile-angular-ui.core.sharedState',
	                        'mobile-angular-ui.core.capture', 'ScrollComponentApp', 'FormTaskApp',
	                        'angularFileUpload','uploadApp','datetimeApp', 'ng-iscroll', 'scrollApp',
	                        'chooseUserApp', 'adaptiveTextareaApp','previewApp', 'ngFileUpload',
	                        'finishRenderAPP' ], function($httpProvider) 
			{
		  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		  var param = function(obj) {
		    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
		      
		    for(name in obj) {
		      value = obj[name];
		      if(value instanceof Array) {
		        for(i=0; i<value.length;i++)
		        {
		          subValue = value[i];
		          fullSubName = name + '[' + i + ']';
		          innerObj = {};
		          innerObj[fullSubName] = subValue;
		          query += param(innerObj) + '&';
		        }
		      }
		      else if(value instanceof Object) {
		        for(subName in value) {
		          subValue = value[subName];
		          fullSubName = name + '[' + subName + ']';
		          innerObj = {};
		          innerObj[fullSubName] = subValue;
		          query += param(innerObj) + '&';
		        }
		      }
		      else if(value !== undefined && value !== null)
		        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
		    }
		      
		    return query.length ? query.substr(0, query.length - 1) : query;
		  };
		 
		  // Override $http service's default transformRequest
		  $httpProvider.defaults.transformRequest = [function(data) {
		    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
		  }];
		});
	
	app.run(function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.$state.isLogin = false;
		$rootScope.systemType = "android";
		
		$rootScope.$on('$routeChangeStart', function(){
		    $rootScope.loading = true;
		});

	    $rootScope.$on('$routeChangeSuccess', function(){
	       $rootScope.loading = false;
	    });
		  
	   // window.androdLoadJs = AndroidLoadJsService.androidLogin;
	});
	
	/**
	 *  主路由
	 *  所有的路由都是配置在这里，个人觉得太臃肿
	 */
	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider.state('main',angularAMD.route({
			url : '/main',
			views:
			{
				'' : angularAMD.route({
	            	   templateUrl : 'base/home/view/main/main.html',
	            	   controller:'MainController',
	  	        	   controllerUrl:['base/home/view/main/js/mainCtr.js']
				}),
	           'body@main': {
	            		templateUrl:'base/home/view/main/html/mainList.html'
	            }
			}
		})).state("login", angularAMD.route({
			url : "/login",
			templateUrl : "base/home/view/login/login.html",
			controller:'LoginController',
			controllerUrl:['base/home/view/login/js/loginService.js',
			               'base/js/md5.js','base/js/angular/ngDialog.js',
			               'base/home/view/login/js/loginCtrl.js',
						   'base/home/components/header/normalOpr.js']//必需是数组
		})).state('main.task',angularAMD.route({
			url:'/task',
			views:{
				'body@main':angularAMD.route({
					templateUrl:'base/home/view/task/taskMain.html',
					controller:'ToDoTaskCtrl',
					controllerUrl:['base/home/view/task/js/ToDoTaskService.js',
					               'base/home/view/task/js/ToDoTaskCtrl.js']
				})
			}
		})).state('main.task.taskInfo',angularAMD.route({
			url:'/taskInfo/{workToId}',
			views:{
				'body@main':angularAMD.route({
					templateUrl:'base/home/view/task/view/taskInfo.html',
					controller : 'TaskInfoCtrl',
					controllerUrl : ['base/home/view/task/js/ToDoTaskCtrl.js',
					                 'base/home/view/task/js/ToDoTaskService.js']
				})
			}
		}))

		//已办事项
		.state('main.havedo',angularAMD.route({
			url:'/havedo',
			views:{
				'body@main':angularAMD.route({
					templateUrl:'base/home/view/havedo/haveDo.html',
					controller:'haveDoListCtrl',
					controllerUrl:['base/home/view/havedo/js/haveDoCtrl.js',
					               'base/home/view/havedo/js/haveDoService.js']
				})
			}
		})).state('main.havedodetail',angularAMD.route({
			url:'/havedodetail/{instanceId}',
			views:{
				'body@main':angularAMD.route({
					templateUrl:'base/home/view/havedo/haveDoDetail.html',
					controller:'haveDoDetailCtrl',
					controllerUrl:[]
				})
			}
		})).state('main.demo',angularAMD.route({
			url:'/demo',
			views:{
				'body@main':angularAMD.route(
					{
						templateUrl:'base/home/view/demo/demoList.html',
							controller:'DemoController',
							controllerUrl:['base/home/view/demo/js/demoCtrl.js',
							               'base/home/view/demo/js/demoService.js']
						
					})
			}
		})).state('main.demo.addDemo',angularAMD.route({
			url:'/addDemo',
			views:{
				'body@main':angularAMD.route(
					{
						templateUrl:'base/home/view/demo/view/addDemo.html',
						controller:'AddDemoController',
						controllerUrl:[]
						
					})
			}
		})).state('main.demo.demoDetail',angularAMD.route({
			url:'/demoDetail/{demoId}',
			views:{
				'body@main':angularAMD.route(
					{
						templateUrl:'base/home/view/demo/view/demodetail.html',
							controller:'DemoDetailController',
							controllerUrl:[]
						
					})
			}
		})).state("texterea", angularAMD.route({
			url : "/texterea",
			templateUrl : "base/home/view/textarea/textdetail.html",
			controller:'TextereaController',
			controllerUrl:['base/home/view/textarea/textareaCtrl.js',
			               'base/home/view/textarea/textareaServer.js'
			               ]
		}));
	});
	return angularAMD.bootstrap(app);
});

Date.prototype.Format = function (fmt) { //author: sxx
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var rememberState={};
var initToTopState = function()
{
	 rememberState={toTop:0,pageIndex:1};
	//$state.go(destination,{"pageIndex":1,"totop":0});
	//window.localStorage.setItem("totop",0);
	//window.localStorage.setItem("pageIndex",1);
};