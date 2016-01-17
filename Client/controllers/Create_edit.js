myApp.controller('createCtrl', ['$scope', '$http', '$state','$stateParams' , function($scope, $http,$state,$stateParams) {
	var id = $stateParams.id;
	//console.log(id);
	$scope.editMode = false;
	if(typeof id === 'undefined'){
		$scope.editMode =false;
	}
	else{
		$scope.editMode = true;
	}
	var refresh = function(){
		$http.get('/details').success(function(response){
		 console.log("I got data required");
		 $scope.details = response;
		 console.log("$scope.details: ",$scope.details);
		 //$scope.person = "";
	 });
	};
	 
	 if($scope.editMode == true){
		 $http.get('/details/'+id).success(function(response){
			$scope.person = response;
		});
	 }
	 
	 
	 $scope.saveDetails = function(){
		 if($scope.editMode == false){
		//$scope.hidesave = false;
		//$scope.person = "";
		console.log("i am in save")
		console.log($scope.person);
		$http.post('/details',$scope.person).success(function(response){
			console.log(response);
			refresh();
		})
		$state.go("itemList");
	 }
	 else{
		 console.log($scope.person)
		//$scope.hidesave = false;
		$http.post('/details/'+$scope.person._id, $scope.person).success(function(response){
			console.log(response);
			refresh();
		});
		$state.go("itemList");
	 }
	};
	
	/*$scope.updateDetails = function(){
		console.log($scope.person)
		//$scope.hidesave = false;
		$http.put('/details/'+$scope.person._id, $scope.person).success(function(response){
			console.log(response);
			refresh();
		});
	};*/
	
}]);