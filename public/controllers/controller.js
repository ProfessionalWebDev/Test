var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
	
	person1 = {
		name: 'person1',
		desc: 'This is description for first person'
	};
	person2 = {
		name: 'person2',
		desc: 'This is description for second person'
	};
		person3 = {
		name: 'person3',
		desc: 'This is description for third person'
	};
	
	var details =[person1 , person2 , person3];
	$scope.details = details;
}]);