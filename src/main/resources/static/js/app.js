/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module('app', ['ngRoute'])
        .config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : 'clientes.html',
		controller : 'principal'
	})
        .when('/clientes', {
		templateUrl : 'clientes.html',
		controller : 'principal'
	})
        .when('/productos', {
		templateUrl : 'productos.html',
		controller : 'productos'
	})
	.when('/login', {
		templateUrl : 'login.html',
		controller : 'login'
	})
	.otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  })
        .controller('principal', function ($scope, $http) {
            $scope.greeting = {};
//            $http.get('/api/cliente').then(function (response) {
//                $scope.greeting = response.data;
//                
//            })
        })
        .controller('navigation', function($scope) {
            var currentItem = 1;
            $scope.isSelected = function(item) {
                return item === current;
            };
            $scope.select= function(item ) {
                currentItem = item;
            }
        })
        .controller('login', function($scope) {})