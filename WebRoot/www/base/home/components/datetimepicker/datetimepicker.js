angular.module('datetimeApp',[])
   .directive('datetimePicker',function(){
	   return {
		    restrict:"A",
		    require:'?ngModel',  
		    link:function(scope, element, attr,ngModel){
		      element.bind("click", function () {
		        window.WdatePicker({
		          dateFmt:attr.timeFormat,
		          onpicked: function () {
		            scope.$apply(
                        ngModel.$setViewValue(this.value)  
                    );
		          }
		        });
		      });
		    }
		  };
   });


