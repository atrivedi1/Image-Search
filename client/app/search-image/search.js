angular.module('searchImage', [])
  .controller('searchController',['$scope','$http', function($scope, $http){

    $scope.searchImage = function(){
    	var searchTag = {
    		searchTag: $scope.searchTag
    	}  

    	$http.post('/search',searchTag)
    		.success(function(result){
    			
    			$('.image-wrapper img').attr({'src': result[0].imgUrl});
    			$('.image-description').text(result[0].description);
    			console.log(result);
    			$scope.imageUrl = result[0].imgUrl;
    			$scope.description = result[0].description;
    			console.log($scope);
    		})
    		.error(function(){
    			console.log('item doesnt exist');
    		});

    		$scope.searchTag = '';
    };
  }])
