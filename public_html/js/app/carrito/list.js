'use strict';
moduloCarrito.controller('CarritoListController',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "list";

                //---
                $scope.url = $scope.ob + '/' + $scope.op;
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                //---
                serverCallService.list($scope.ob).then(function (response) {
                    if (response.status == 200) {
                            $scope.page = response.data.json;
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                }).catch(function (data) {
                    $scope.status = "Error en la recepción de datos del servidor";
                });
//                $scope.toBuy = function () {
//                    $location.path('/carrito/buy/');
//                };
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }
        ]);