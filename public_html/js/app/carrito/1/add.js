/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

moduloCarrito.controller('CarritoAdd1Controller',
        ['$scope', '$routeParams', 'serverCallService', '$location', 'sessionService', 'constantService','objectService',
            function ($scope, $routeParams, serverCallService, $location, sessionService, constantService,objectService) {
                $scope.ob = "carrito";
                $scope.op = "add";
                $scope.profile = 1;
                //---
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.url = $scope.ob + '/' + $scope.profile + '/' + $scope.op;
                //---
                $scope.id = $routeParams.id;
                //---
                serverCallService.getOne($scope.ob, $scope.id).then(function (response) {
                    if (response.status == 200) {
                        if (response.data.status == 200) {
                            $scope.status = null;
                            $scope.bean = response.data.json.data;
                            $scope.metao = response.data.json.metaObject;
                            $scope.metap = response.data.json.metaProperties;
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor";
                        }
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                }).catch(function (data) {
                    $scope.status = "Error en la recepción de datos del servidor";
                });
                //---
                
                $scope.add = function () {
                    serverCallService.add($scope.ob, $scope.id, $scope.cantidad).then(function (response) {
                        if (response.status == 200) {
                            if (response.data.status == 200) {
                                $scope.bean.id = response.data.json;
                                $scope.status = "El registro con id=" + $scope.id + " se ha añadido al carro.";
                           
                            } else {
                                $scope.status = "Error en la recepción de datos del servidor ";
                            }
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor ";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error en la recepción de datos del servidor ";
                    });
                }
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }]);