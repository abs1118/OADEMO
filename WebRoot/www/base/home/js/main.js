require.config({
    baseUrl: "",
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'base/js/angular/angular',
        'mobileAngularUI': 'base/js/mobile-angular-ui/mobile-angular-ui',
        'mobileAngularUIGestures': 'base/js/mobile-angular-ui/mobile-angular-ui.gestures',
        'angularUIRouter':'base/js/angular/angular-ui-router',
		'angularResource':'base/js/angular/angular-resource',
		'angularAMD':'base/js/angular/angularAMD', 
		'app':'base/home/js/app',
		'mobileAngularUIComponents':'base/js/mobile-angular-ui/mobile-angular-ui.components',
		'angularAnimate':'base/js/angular/angular-animate',
		'mobileAngularuiCore':'base/js/mobile-angular-ui/mobile-angular-ui.core.min',
		'mobileAngularUIMigrate':'base/js/mobile-angular-ui/mobile-angular-ui.migrate',
		'scrollComponent':'base/home/components/scrollcomponent/scrollComponent',
		'taskFormComponent' : 'base/home/components/formtask/formTaskComponent',
		'angularfileupload':'base/js/angular/angular-file-upload',
		'ngfileupload':'base/js/angular/ng-file-upload',
		'ngdialog':'base/js/angular/ngDialog',
		'header':'base/home/components/header/header',
		'uploadFiles':'base/home/components/uploadfile/upload',
		'chooseuser':'base/home/components/chooseuser/chooseuser',
		'adaptivetextarea':'base/home/components/adaptivetextarea/adaptiveTextarea',
		'previwe':'base/home/components/preview/previwe',
		'ngIscroll':'base/home/components/iscroll/ng-iscroll',
		'scroll':'base/home/components/iscroll/scroll',
		'finishRender':'base/home/components/finishrender/finishReander',
		'datetimePicker':'base/home/components/datetimepicker/datetimepicker'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
    	'angularUIRouter': ['angular'],
    	'angularResource': ['angular'],
    	'angularUIRouter': ['angular'],
    	'angularAMD':['angular'],
    	'angularfileupload':['angular'],
    	'mobileAngularUI':['angular'],
    	'mobileAngularUIGestures':['mobileAngularUI'],
    	'angularAnimate':['mobileAngularUI'],
    	'mobileAngularuiCore':['mobileAngularUI'],
    	'mobileAngularUIMigrate':['angular'],
    	'scrollComponent':['mobileAngularUI'],
    	'header':['mobileAngularuiCore'],
    	'ngdialog':['angular'],
    	'mobileAngularUIComponents':['mobileAngularUI'],
    	'uploadFiles':['angular'],
    	'chooseuser':['angular'],
    	'adaptivetextarea':['angular'],
    	'previwe':['angular'],
    	'ngfileupload':['angular'],
    	'ngIscroll':['angular'],
    	'scroll':['angular'],
    	'finishRender':['angular'],
    	'datetimePicker':['angular']
    },
    
    // kick start application
    deps: ['app']
});
require( ['base/js/jquery/jquery-1.9.0.js','base/home/components/datetimepicker/WdatePicker.js','base/js/json2.js','base/home/js/showMessage.js','base/js/iscroll/iscroll.js']);
