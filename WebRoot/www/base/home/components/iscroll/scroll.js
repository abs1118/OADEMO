angular.module('scrollApp',[])
   .directive('scroll',function(){
	   return{
		   restrict : 'E',
			replace : true,
			transclude : true,
			scope : {
				
			},
            require : 'scroll',
			
			link : function(scope,element,attrs,scrollCtrl){
			},
			controller : function($scope,$element,$attrs){
				var  pullDownEl = document.getElementById('pullDown');
				 var   pullDownOffset = pullDownEl.offsetHeight;
				$scope.pullDownAction=function(){
					alert("下拉刷新");
					$scope.refreshiScroll();
				};
			    $scope.$parent.myScrollOptions = {
					useTransition: true,
			        snap: true,
					hScrollbar:true,
					topOffset: pullDownOffset,
					onRefresh: function () {
						if (pullDownEl.className.match('loading')) {
							pullDownEl.className = '';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
						} 
					},
					onScrollMove: function () {
						if (this.y > 5 && !pullDownEl.className.match('flip')) {
							pullDownEl.className = 'flip';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
							this.minScrollY = 0;
						} else if (this.y < 5 && pullDownEl.className.match('flip')) {
							pullDownEl.className = '';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
							this.minScrollY = -pullDownOffset;
						} 
					},
			        onScrollEnd: function ()
			        {
			           if (pullDownEl.className.match('flip')) {
							pullDownEl.className = 'loading';
							pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
							//$scope.pullDownAction();	// Execute custom function (ajax call?)
						} 
			        }
			    };

			    // expose refreshiScroll() function for ng-onclick or other meth
			    $scope.refreshiScroll = function ()
			    {
			        $scope.$parent.myScroll['wrapper'].refresh();
			    };

                $scope.demos=[{
                	"name" : "Alfreds Futterkiste",
                	"id" : "Berlin",
                	"country" : "Germany"
                	},
                	{
                	"name" : "Berglunds snabbköp",
                	"id" : "Luleå",
                	"country" : "Sweden"
                	},
                	{
                	"name" : "Centro comercial Moctezuma",
                	"id" : "México D.F.",
                	"country" : "Mexico"
                	},
                	{
                	"name" : "Ernst Handel",
                	"id" : "Graz",
                	"country" : "Austria"
                	},
                	{
                	"name" : "FISSA Fabrica Inter. Salchichas S.A.",
                	"id" : "Madrid",
                	"country" : "Spain"
                	},
                	{
                	"name" : "Galería del gastrónomo",
                	"id" : "Barcelona",
                	"country" : "Spain"
                	},
                	{
                	"name" : "Island Trading",
                	"id" : "Cowes",
                	"country" : "UK"
                	},
                	{
                	"name" : "Königlich Essen",
                	"id" : "Brandenburg",
                	"country" : "Germany"
                	},
                	{
                	"name" : "Laughing Bacchus Wine Cellars",
                	"id" : "Vancouver",
                	"country" : "Canada"
                	},
                	{
                	"name" : "Magazzini Alimentari Riuniti",
                	"id" : "Bergamo",
                	"country" : "Italy"
                	},
                	{
                	"name" : "North/South",
                	"id" : "London",
                	"country" : "UK"
                	},
                	{
                	"name" : "Paris spécialités",
                	"id" : "Paris",
                	"country" : "France"
                	},
                	{
                	"name" : "Rattlesnake Canyon Grocery",
                	"id" : "Albuquerque",
                	"country" : "USA"
                	},
                	{
                	"name" : "Simons bistro",
                	"id" : "København",
                	"country" : "Denmark"
                	},
                	{
                	"name" : "The Big Cheese",
                	"id" : "Portland",
                	"country" : "USA"
                	},
                	{
                	"name" : "Vaffeljernet",
                	"id" : "Århus",
                	"country" : "Denmark"
                	},
                	{
                	"name" : "Wolski Zajazd",
                	"id" : "Warszawa",
                	"country" : "Poland"
                	}
                	];
			},
			
			
			
			templateUrl : 'base/home/components/iscroll/scroll.html'
	   };
   });