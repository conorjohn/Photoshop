var egghead = angular.module("egghead", []);
/*egghead.factory('Data', function(){
	return {message:"I'm data from a service"}
})*/

egghead.controller("AppCtrl", function () {
	var app = this;

	app.message = "Hello World";
})

egghead.controller('jsonData', ['$scope', function($scope){

	//Let's namespace the user details 
	//Also great for DOM Visual aids too
	$scope.user = {};
	$scope.user.details = {
		"username": "Todd Motto",
		"id": "23784898"
	};
}]);

egghead.directive('customButton', function (){
	return {
		//restricts the usage to A: attribute; E: element; C: class; M: comment; or any combination of the AECM
		/*restrict: 'A',
		//to be replaced with the template provided
		replace: true,
		//using transclude allows for existing DOM content to be copied into the directive. You’ll see the words ‘Click me’ have ‘moved’ into the Directive once rendered.
		transclude: true,
		//Template to be used to replace the bound markup
		template: '<a href="" class="myawesomebutton" ng-transclude>' + '<i class="icon-ok-sign"></i>' + '</a>',
		
		link: function (scope, element, attrs){
			// DOM Manipulation &mevents go here
		}	*/	
		templateUrl: 'customButton.html'
	};
});

/*egghead.directive('importTemplate', function(){
	return{
		templateUrl: 'templates/customButton.html'
	};
});*/

egghead.directive("myFirstDirective", function (){
	return function (scope, element, attrs){
		element.text(scope.app.message + " " + attrs.message);
	}
})

egghead.controller("FirstCtrl1", function (){

})

/*function FirstCtrl($scope, Data){
	$scope.data = Data;
}*/

// Apply These Filters as an Experiment
egghead.filter('reverse', function(){
	return function (text){
		if(angular.isNumber(text)){
			text = text*2;
		}
		//return text.split("").reverse().join("");
		//  total mortage * (APR/number of years) / total months
		var apr = text/100*1.4;

		//This gives the total including the APR
		text = Number(text) + Number(apr);

		//Text is divided by the total amount of months
		text = text/48;

		return text + " euro per month";
	}
})