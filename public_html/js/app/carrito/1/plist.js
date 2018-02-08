'use strict';
moduloCarrito.controller('CarritoPlist1Controller',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "plist";
                $scope.profile = 1;
                //---
                $scope.url = $scope.ob + '/' + $scope.profile + '/' + $scope.op;
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                //---
                serverCallService.list($scope.ob).then(function (response) {
                    if (response.status == 200) {
                            $scope.bean = response.data.json;
                            $scope.metao = response.data.json.metaObject;
                            $scope.metap = response.data.json.metaProperties;

                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                }).catch(function (data) {
                    $scope.status = "Error en la recepción de datos del servidor";
                });
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }
        ]);