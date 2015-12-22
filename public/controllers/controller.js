//var myApp = angular.module('myApp',[]);
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


myApp.controller('createCtrl', ['$scope', '$http', '$stateParams' , function($scope, $http,$stateParams) {
	var id = $stateParams.id;
	//console.log(id);
	var editMode = false;
	if(typeof id === 'undefined'){
		editMode =false;
	}
	else{
		editMode = true;
	}
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 //$scope.person = "";
	 });
	};
	 
	 if(editMode == true){
		 $http.get('/details/'+id).success(function(response){
			$scope.person = response;
		});
	 }
	 
	 
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


myApp.controller('viewCtrl', ['$scope', '$http', '$state','$stateParams', function($scope, $http,$state,$stateParams) {
	
	var id = $stateParams.id;
	console.log(id)
	$http.get('/details/'+id).success(function(response){
			$scope.person = response;
			console.log($scope.person)
		});
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 //$scope.person = "";
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
