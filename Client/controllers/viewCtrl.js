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