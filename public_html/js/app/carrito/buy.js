/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
moduloCarrito.controller('CarritoBuyController',
        ['$scope', '$location', 'serverCallService', 'constantService',
            function ($scope, $location, serverCallService, constantService) {
                $scope.ob = "carrito";
                $scope.op = "buy";

                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.op;
                //----

                $scope.buy = function ()
                {
                    serverCallService.buy($scope.ob).then(function (response) {
                        if (response.data.status == 200) {
                            $scope.status = response.data.json;
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor 1";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error em la recepción de datos del servidor 2";
                    });
                }
//                $scope.buy = function () {
//                    serverCallService.buy($scope.ob).then(function (response) {
//                        if (response.status == 200) {
//                                $scope.status = response.json;
//                            } else {
//                                $scope.status = "Error en la recepción de datos del servidor 1 ";
//                            }
//                    }).catch(function (data) {
//                        $scope.status = "Error en la recepción de datos del servidor 2 ";
//                    });
//                };
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }
        ]);