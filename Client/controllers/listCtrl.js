myApp.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
	
	var refresh = function(){
		console.log("Inside List Ctrl.JS");
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