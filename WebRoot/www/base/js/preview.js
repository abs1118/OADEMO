window.PreviewPlugin = function(url,callback) {  
    cordova.exec(callback, pluginFailed, "PreviewPlugin", "preview", [ url ]);  
};  

window.RelationChannelPlugin = function(url,callback){
	cordova.exec(callback,pluginFailed, "RelationChannelPlugin", "relationChannel", [ url ]); 
};

var pluginFailed = function(message) {  
    //alert("failed>>" + message);  
};

//调用IOS方法插件
var MyIOSPlugin = {
		/*** 调用IOS方法* 
		 * @param method 要调用IOS插件的方法名* 
		 * @param parameter 参数[数组]* 
		 * @param success 成功回调* 
		 * @param fail 失败回调*
		 *  @returns {*}*/
		nativeFunction: function(method, parameter, success, fail) 
		{
			return Cordova.exec(success, fail, "MyPlugin", method, parameter);
		}
};

//调用IOS退出插件方法
var OutIOSPlugin = {
		/*** 调用IOS方法* 
		 * @param method 要调用IOS插件的方法名* 
		 * @param parameter 参数[数组]* 
		 * @param success 成功回调* 
		 * @param fail 失败回调*
		 *  @returns {*}*/
		nativeFunction: function(method, parameter, success, fail) 
		{
			return Cordova.exec(success, fail, "OutPlugin", method, parameter);
		}
};