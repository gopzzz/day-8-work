var app=angular.module('mainApp',[]);
app.controller('people',function($scope,$http){
$http({
    method:'GET',
    url:'/model/database.json'
}).then(function(response){
    $scope.persons=response.data;
});
});
   