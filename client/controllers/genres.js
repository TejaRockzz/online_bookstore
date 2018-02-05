var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('GenresController loaded...');

	$scope.getgenres = function(){
		$http.get('/api/genres').success(function(response){
			$scope.genres = response;
		});
	}

	$scope.getgenre = function(){
		var id = $routeParams.id;
		$http.get('/api/genres/'+id).success(function(response){
			$scope.genre = response;
		});
	}

	$scope.addgenre = function(){
		console.log($scope.genre);
		$http.post('/api/genres/', $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
	}

	$scope.updategenre = function(){
		var id = $routeParams.id;
		$http.put('/api/genres/'+id, $scope.genre).success(function(response){
			window.location.href='#/genres';
		});
	}

	$scope.removegenre = function(id){
		$http.delete('/api/genres/'+id).success(function(response){
			window.location.href='#/genres';
		});
	}
}]);