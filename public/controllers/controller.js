var myApp = angular.module('myApp', []);
/*myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
	
	//$scope.hidesave = false;

	
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 $scope.person = "";
	 });
	};
	 refresh();
	
	$scope.saveDetails = function(){
		//$scope.hidesave = false;
		//$scope.person = "";
		console.log("i am in save")
		console.log($scope.person);
		$http.post('/details',$scope.person).success(function(response){
			console.log(response);
			refresh();
		})
	};
	
	$scope.updateDetails = function(){
		console.log($scope.person)
		//$scope.hidesave = false;
		$http.put('/details/'+$scope.person._id, $scope.person).success(function(response){
			console.log(response);
			refresh();
		});
	};
	
	$scope.deleteDetails = function(id_toDel){
		console.log("delete: ",id_toDel);
		$http.delete('/details/'+id_toDel).success(function(response){
			console.log("delete response: ",response);
			refresh();

		})
	};
	
	$scope.editDetails = function(id_edit){
		
		$http.get('/details/'+id_edit).success(function(response){
			$scope.person = response;
		});
		
		
	};
	
	$scope.viewDetails = function(id_view){
		$http.get('/details/'+id_view).success(function(response){
			$scope.person = response;
		});
		
	}
	
}]);*/


myApp.controller('createCtrl', ['$scope', '$http', function($scope, $http) {
	
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 $scope.person = "";
	 });
	};
	 refresh();
	 
	 $scope.saveDetails = function(){
		//$scope.hidesave = false;
		//$scope.person = "";
		console.log("i am in save")
		console.log($scope.person);
		$http.post('/details',$scope.person).success(function(response){
			console.log(response);
			refresh();
		})
	};
	
	$scope.updateDetails = function(){
		console.log($scope.person)
		//$scope.hidesave = false;
		$http.put('/details/'+$scope.person._id, $scope.person).success(function(response){
			console.log(response);
			refresh();
		});
	};
	
}]);


myApp.controller('viewCtrl', ['$scope', '$http', function($scope, $http) {
	
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 $scope.person = "";
	 });
	};
	 refresh();
	 
	 $scope.deleteDetails = function(id_toDel){
		console.log("delete: ",id_toDel);
		$http.delete('/details/'+id_toDel).success(function(response){
			console.log("delete response: ",response);
			refresh();

		})
	};
	
}]);

myApp.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
	
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 $scope.person = "";
	 });
	};
	 refresh();
	 
	 $scope.deleteDetails = function(id_toDel){
		console.log("delete: ",id_toDel);
		$http.delete('/details/'+id_toDel).success(function(response){
			console.log("delete response: ",response);
			refresh();

		})
	};
	
	$scope.editDetails = function(id_edit){
		
		$http.get('/details/'+id_edit).success(function(response){
			$scope.person = response;
		});
		
		
	};
	
	$scope.viewDetails = function(id_view){
		$http.get('/details/'+id_view).success(function(response){
			$scope.person = response;
		});
		
	}
	
}]);
