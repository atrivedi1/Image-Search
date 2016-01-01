var app = angular.module('app', ['addImage','searchImage', 'ngRoute']);


app.controller('mainController', ['$scope', '$http', function(a,b){

}]);

app.config(['$routeProvider', function(routeProvider){
  
  routeProvider
    .when('/add',{
      templateUrl: '../views/add.html',
      controller: 'addController'
    })
    

}]);
