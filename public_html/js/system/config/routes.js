/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
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
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationClientPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationProfesorPromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};
var authenticationAlumnoPromise = function (sessionService) {
    return sessionService.authenticationPromise(4);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(5);
};
trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //--
        $routeProvider.when('/tipopago/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipopagoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipopagoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-----------
        $routeProvider.when('/factura/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'FacturaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
       //--------       
        $routeProvider.when('/cliente/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ClienteView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClientePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ClienteRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
         //--------       
        $routeProvider.when('/servicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ServicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //--------       
        $routeProvider.when('/sesion/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SesionView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SesionPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'SesionRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //--------       
        $routeProvider.when('/boceto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'BocetoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'BocetoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'BocetoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //--------       
        $routeProvider.when('/galeria/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GaleriaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GaleriaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GaleriaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
       
       
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
