// Create an angular application called "sortApp"
var sortApp = angular.module('sortApp', []);

// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables
sortApp.controller('mainController', function($scope, $http) {

	// Use and $http.get request to get the salary data
	$http.get('data/salaries.json').then(function(response) {

		// Set $scope.data equal to the data returned in your results
        $scope.data = response.data;
        console.log($scope.data);
    });
});