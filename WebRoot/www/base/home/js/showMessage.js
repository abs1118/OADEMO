var showAlert =function(message,method,tip,button){
	alert(message);
	navigator.notification.alert(message, method,tip, button);
};
