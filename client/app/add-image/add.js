angular.module('addImage',[])
  .controller('addController',['$scope','$http', function($scope, $http){
    
    $scope.addImage = function(){
      var dataToPost = {
        image: $scope.image,
        tag: $scope.imageTag,
        description: $scope.imageDescription
      };
      //ensure that the url provided matches the different
      //routes in app.js
      $http.post('/add', dataToPost)
        .success(function(){
            console.log("posted successfully. you a fuckin P-I-M-P.")
            $scope.image = '';
            $scope.imageTag = '';
            $scope.imageDescription = '';
        })
        //why do you need to pass in two params into the anonymous function
        //here???
        .error(function(data, error){
           console.log("you fd up");
        });
    };
  }])
