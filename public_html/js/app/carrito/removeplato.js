'use strict';

moduloCarrito.controller('CarritoRemoveController',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "removeplato";
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.op;
                //---
                $scope.id_plato = $routeParams.id;
                //---
                $scope.remove = function () {
                    serverCallService.removeplato($scope.ob, $scope.id_plato).then(function (response) {
                        if (response.status == 200) {
                            $scope.status = "El plato se ha eliminado.";
                        } else {
                            $scope.status = "Error 2: en la recepción de datos del servidor";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error 3: en la recepción de datos del servidor";
                    });
                }
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }]);