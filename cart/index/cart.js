/*myModule = angular.module('cartApplication', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when("/alteritem", {
            templateUrl: "index.html",
            controller: "alteritemController"
        })
        .when("/billItem", {
            templateUrl: "bill.html",
            controller: "billController"
        })
        
        otherwise({
            redirect: '/index.html'
        });
    }]);*/

var app = angular.module('cartApp', []);

app.controller('itemsCart',function($scope) {

   $scope.items = {id: '',itemName:'', amount:''};
   $scope.itemsToAdd = [];
   	$scope.add = function() {
   		$scope.itemsToAdd.push($scope.items);
   		
   		var url = "http://localhost:8080/cart/additems"
        var request = {
        method: 'POST',
        url: url,
        data: $scope.itemsToAdd
    };

    $http(request)
        .success(function(data, status, headers, config){
        	alert(data)
        })
        .error(function(data, status, headers, config){
        	alert("failed")

        });
  }
   	
    

   
   });

app.controller('billCart',function($scope,$http) {
	$scope.bill = function() {
	$http.get('http://localhost:8080/cart/calbill').
    then(function(response) {
        $scope.bill = response.data;
    });
	}
});



