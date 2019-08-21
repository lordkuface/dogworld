var DogApp = angular.module("DogApp", []);

DogApp.controller("DogController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.GetRequest = function() {
    console.log("I've been pressed!");
    $http.get("https://dog.ceo/api/breeds/image/random").then(
      function successCallback(response) {
        $scope.response = response.data.message;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };
});