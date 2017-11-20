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
            $scope.tabla = {};
            $scope.tabla.encabezado = ["id","nombre","apellido","tipo","createdOn","estado"];
            $scope.tabla.datos = {};
            $http.get('/api/cliente').then(function (response) {
                $scope.tabla.datos = response.data;
                
            })
        })
        .controller('navigation', function($scope) {
            var currentItem = 1;
            $scope.isSelected = function(item) {
                return item === currentItem;
            };
            $scope.select= function(item ) {
                currentItem = item;
            }
        })
        .controller('login', function($scope) {})
        .controller('productos', function ($scope, $http) {
            $scope.tabla = {};
            $scope.cont = 0;
            $scope.tabla.encabezado = ["id","nombre","descripcion"];
            $scope.tabla.datos = {};
            $http.get('/api/productos').then(function (response) {
                $scope.tabla.datos = response.data;
                
            })
        })