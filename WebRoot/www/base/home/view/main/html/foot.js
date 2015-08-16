//点击退出按钮事件
function onExitKeyDown() {
    navigator.notification.confirm(
        '按确定退出程序!',  
        onConfirm,              
        '确定要退出程序吗?',       
        '确定,取消'      
    );
}
//确定框
function onConfirm(button) {
     if(button==1) navigator.app.exitApp(); //选择了确定才执行退出
}  