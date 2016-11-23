myModule = angular.module('cartApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when("/additem", {
            templateUrl: "index.html",
            controller: "itemsCart"
        })
        .when("/bill", {
            templateUrl: "bill.html",
            controller: "billCart"
        })`
        
        .when("/delete", {
            templateUrl: "delete.html",
            controller: "deleteitem"
        })`
        
        otherwise({
            redirect: '/index.html'
        });
    }]);