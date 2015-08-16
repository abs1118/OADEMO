var uploadApp = angular.module("uploadApp", ['ngFileUpload']);
uploadApp.directive("uploadDrective", function() {
	return {
		scope : {
			files : '='
		},
		restrict : 'E',
		controller : [ '$rootScope', '$scope', '$state',
				function($rootScope, $scope, $state) {

					/*$scope.onFileSelect = function($files) {
						$scope.hasFile = true;
						for ( var i = 0; i < $files.length; i++) {
							var file = $files[i];
							$scope.files.push(file);
						}
					};*/
			
					$scope.onFileSelect = function (files) {
					  	if (files != null&&files !="") {
					  		$scope.hasFile = true; 
				            $scope.files.push(files[0]);
				        }
				     };

					$scope.removeFile = function(file) {
						var index = $scope.files.indexOf(file);
						if (index > -1) {
							$scope.files.splice(index, 1);
						}
					};
				} ],
		templateUrl : "base/home/js/uploadfile/uploadtmpl.html"

	};
});
uploadApp.directive('dragToDismiss', function($drag, $parse, $timeout) {
	return {
		restrict : 'A',
		compile : function(elem, attrs) {
			var dismissFn = $parse(attrs.dragToDismiss);
			return function(scope, elem, attrs) {
				var dismiss = false;

				$drag.bind(elem, {
					constraint : {
						minX : 0,
						minY : 0,
						maxY : 0
					},
					move : function(c) {
						if (c.left >= c.width / 4) {
							dismiss = true;
							elem.addClass('dismiss');
						} else {
							dismiss = false;
							elem.removeClass('dismiss');
						}
					},
					cancel : function() {
						elem.removeClass('dismiss');
					},
					end : function(c, undo, reset) {
						if (dismiss) {
							elem.addClass('dismitted');
							$timeout(function() {
								scope.$apply(function() {
									dismissFn(scope);
								});
							}, 400);
						} else {
							reset();
						}
					}
				});
			};
		}
	};
});