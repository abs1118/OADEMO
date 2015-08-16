(function(){
	document.addEventListener("deviceready", onDeviceReady, false);

})();

function onDeviceReady() {
	// 监听在线状态
	document.addEventListener("offline", onOffline, false);  
    //document.addEventListener("backbutton", onBackKeyDown, false); 
	//document.addEventListener("menubutton",eventMenuButton, false); //菜单键
	//document.addEventListener("searchbutton", eventSearchButton, false); //搜刮键
}

function onOffline(e) {  
    // Handle the offline event  
   navigator.notification.alert('网络开小差了，稍后试试吧！', null,'提示', '确认');
   
}  

function showToast(msg, duration) 
{    
    duration = isNaN(duration) ? 1000 : duration;    
    var m = document.createElement('div');    
    m.innerHTML = msg;    
    m.style.cssText = "width:60%; min-width:150px; "+
    				  "background:#000; opacity:0.5;"+
    				  "height:40px; color:#fff; "+
    				  "line-height:40px; text-align:center;"+
    				  "border-radius:5px; position:fixed;"+
    				  "top:80%; left:20%;"+
    				  "z-index:999999; font-weight:bold;";    
    document.body.appendChild(m);    
    setTimeout(function() {    
        var d = 0.5;    
        m.style.webkitTransition = '-webkit-transform ' + d    
                + 's ease-in, opacity ' + d + 's ease-in';    
        m.style.opacity = '0';    
        setTimeout(function() {    
            document.body.removeChild(m);    
        }, d * 1000);    
    }, duration);    
}    