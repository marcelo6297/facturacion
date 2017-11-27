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
        .when('/clientes/:clienteId', {
		templateUrl : 'clientesEdit.html',
		controller : 'cliente'
	})
        .when('/clientes/new', {
		templateUrl : 'clientesEdit.html',
		controller : 'cliente'
	})
        
        .when('/productos', {
		templateUrl : 'productos.html',
		controller : 'productos'
	})
	.when('/login', {
		templateUrl : 'login.html',
		controller : 'navigation'
	})
	.otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  })
        .controller('principal', function ($scope, $route,$http) {
            $scope.tabla = {};
            $scope.tabla.encabezado = ["id","nombre","apellido","activo","tipo","createdOn"];
            $scope.tabla.datos = {};
            $http.get('/api/cliente').then(function (response) {
                $scope.tabla.datos = response.data;
                
            })
        })
        .controller('cliente', function ($scope, $http, $routeParams) {
            $scope.tabla = {};
            $scope.tabla.encabezado = ["id","nombre","apellido","tipo","createdOn","estado"];
            $scope.cliente = {};
            $scope.tipos = [];
            
            //cargar los tipos
            $http.get("api/cliente/tipos").then(function (response){
                $scope.tipos = response.data;
            })
            
            $routeParams.clienteId && $http.get('/api/cliente/'+$routeParams.clienteId).then(function (response) {
                $scope.cliente = response.data;
                $scope.cliente.tipo = response.data.tipo
                
            });
            
            $scope.save = function() {
                $http.post('/api/cliente/', $scope.cliente).then(function (response) {
                    if (response.status == 200 ){
                        
                        $scope.cliente = {};
                        $scope.showMsg = true;
                        
                    }
                
                });
            }
        })
        .controller('navigation', function($rootScope,$scope, $http, $window,$location) {
            var currentItem = 1;
            $rootScope.username = 'anonimo';
            $rootScope.authenticated = false;
            
            $scope.isSelected = function(item) {
                return item === currentItem;
            };
            $scope.select= function(item ) {
                currentItem = item;
            }
            
            var authenticate = function (callback) {

                $http.get('/user').then(function (response) {
                    if (response.data.name) {
                        $rootScope.authenticated = true;
                        $rootScope.username = response.data.name;
                    } else {
                        $rootScope.authenticated = false;
                        $rootScope.username = 'anonimo';
                    }
                    callback && callback();
                })

            }

            authenticate();
            $scope.credentials = {};
            $scope.login = function () {
                authenticate($scope.credentials, function () {
                    if ($rootScope.authenticated) {
                        $location.path("/");
                        $scope.error = false;
                    } else {
                        $scope.error = true;
                        $window.location.reload();
                    }
                });
            };
            $scope.logout = function(){
                $http.post("/logout").then( function(){
                    if ($rootScope.authenticated) {
                        $scope.error = false;
                        $window.location.reload();
                    } 
                });
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