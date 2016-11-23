var app = angular.module('myAngularApplication', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when("/", {
            templateUrl: "apphome.html",
            controller: "apphomeController"
        })
        .when("/delitem", {
            templateUrl: "delitem.html",
            controller: "delitemController"
        })
        .when("/billitem", {
            templateUrl: "billitem.html",
            controller: "billitemController"
        })
        .when("/listitem", {
            templateUrl: "listitem.html",
            controller: "listitemController"
        })
       
        
        .otherwise({
            redirect: '/'
        });
    }]);

