/* Copyright (c) 2017 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 *
 * gesane is a medical pilot web application that shows an environment
 *        for easily developing AJAX web applications
 *
 * Sources at https://github.com/rafaelaznar/
 *
 * gesane is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';
moduloUsuario.controller('UsuarioEdit1Controller',
        ['$scope', '$routeParams', '$location', '$filter', '$uibModal', 'serverCallService', 'toolService', 'constantService',
            function ($scope, $routeParams, $location, $filter, $uibModal, serverCallService, toolService, constantService) {
                $scope.ob = "usuario";
                $scope.source = "usuario";
                $scope.op = "edit";
                $scope.profile = 1;
                //--------
                $scope.session_info = sessionService.getSessionInfo();
                $scope.isSessionActive = sessionService.isSessionActive();
                $scope.status = null;
                $scope.debugging = constantService.debugging();
                $scope.bean = {};
                $scope.id = $routeParams.id;
                serverCallService.promise_getOne($scope.source, $scope.id).then(function (response) {
                    if (response.status == 200) {
                        if (response.data.status == 200) {
                            $scope.status = null;
                            $scope.bean = response.data.message.data;
                            $scope.metaobj = response.data.message.metaobj;
                            $scope.metaprops = response.data.message.metaprops;
                            //obj metas
                            $scope.icon = $scope.metaobj.icon;
                            $scope.obtitle = $scope.metaobj.name;
                            $scope.title = "Modificación de " + $scope.obtitle;

                        } else {
                            $scope.status = "Error en la recepción de datos del servidor";
                        }
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                }).catch(function (data) {
                    $scope.status = "Error en la recepción de datos del servidor";
                });
                $scope.save = function () {
                    var jsonToSend = {json: JSON.stringify(toolService.array_identificarArray($scope.bean))};
                    serverCallService.promise_setOne($scope.source, jsonToSend).then(function (response) {
                        if (response.status == 200) {
                            if (response.data.status == 200) {
                                $scope.response = response;
                                $scope.status = "El registro de " + $scope.obtitle + " con id=" + $scope.bean.id + " se ha modificado.";
                                $scope.bean.id = $scope.bean.id;
                            } else {
                                $scope.status = "Error en la recepción de datos del servidor";
                            }
                        } else {
                            $scope.status = "Error en la recepción de datos del servidor";
                        }
                    }).catch(function (data) {
                        $scope.status = "Error en la recepción de datos del servidor";
                    });
                    ;
                };
                $scope.back = function () {
                    window.history.back();
                };
                $scope.close = function () {
                    $location.path('/home');
                };
            }
        ]);