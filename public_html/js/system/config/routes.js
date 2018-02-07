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
var authenticationEmpleadoPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationClientePromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};


foodies.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        //------------Tabla Usuario Perfil 1
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtienda/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtiendaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtienda/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtiendaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtienda/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtiendaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Tipousuario Perfil 1
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Tipoplato Perfil 1
        $routeProvider.when('/tipoplato/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipoplatoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoplato/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoplatoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoplato/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipoplatoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoplato/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipoplatoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipoplato/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipoplatoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Tienda Perfil 1
        $routeProvider.when('/tienda/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TiendaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tienda/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiendaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tienda/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TiendaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tienda/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TiendaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tienda/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TiendaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Ticket Perfil 1
        $routeProvider.when('/ticket/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TicketView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TicketNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TicketEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TicketRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketXpedidoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TicketXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ticket/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TicketXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Plato Perfil 1
        $routeProvider.when('/plato/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PlatoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PlatoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xextras/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoXextrasPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xextras/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoXextrasNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xextras/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoXextrasEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xtipoplato/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoXtipoplatoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xtipoplato/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoXtipoplatoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plato/1/xtipoplato/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlatoXtipoplatoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Pedido Perfil 1
        $routeProvider.when('/pedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xtienda/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXtiendaPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xtienda/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXtiendaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xtienda/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXtiendaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXusuarioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/pedido/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PedidoXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Lineapedido Perfil 1
        $routeProvider.when('/lineapedido/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'LineapedidoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'LineapedidoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXpedidoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xpedido/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXpedidoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xpedido/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXpedidoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xplato/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXplatoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xplato/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXplatoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/lineapedido/1/xplato/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'LineapedidoXplatoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Tabla Extras Perfil 1
        $routeProvider.when('/extras/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ExtrasView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/extras/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ExtrasNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/extras/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ExtrasEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/extras/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ExtrasRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/extras/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ExtrasPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------Carrito Perfil 1 -Not working
        $routeProvider.when('/carrito/1/plist/:page?/:rpp?', {templateUrl: 'js/app/shared/app/plist.html', controller: 'CarritoPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/carrito/1/remove/:id', {templateUrl: 'js/app/carrito/1/remove.html', controller: 'CarritoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/carrito/1/empty/', {templateUrl: 'js/app/carrito/1/empty.html', controller: 'CarritoEmpty1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/carrito/1/buy/:page?/:rpp?', {templateUrl: 'js/app/carrito/1/buy.html', controller: 'CarritoBuy1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/carrito/1/add/:id', {templateUrl: 'js/app/carrito/1/add.html', controller: 'CarritoAdd1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //----------------FIN PERFIL 1

        //------------Tabla Lineapedido Perfil 2
        $routeProvider.when('/lineapedido/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'LineapedidoView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/lineapedido/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/lineapedido/2/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXpedidoPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/lineapedido/2/xplato/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'LineapedidoXplatoPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        //------------Tabla Pedido Perfil 2
        $routeProvider.when('/pedido/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/pedido/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/pedido/2/xtienda/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXtiendaPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/pedido/2/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXusuarioPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        //------------Tabla Ticket Perfil 2
        $routeProvider.when('/ticket/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TicketView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/ticket/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/ticket/2/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketXpedidoPlist2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        //----------------FIN PERFIL 2

        //------------Tabla Carrito Perfil 3 - not working
        $routeProvider.when('/carrito/3/plist/:page?/:rpp?', {templateUrl: 'js/app/carrito/1/plist.html', controller: 'CarritoPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/carrito/3/remove/:id', {templateUrl: 'js/app/carrito/1/remove.html', controller: 'CarritoRemove3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/carrito/3/empty/', {templateUrl: 'js/app/carrito/1/empty.html', controller: 'CarritoEmpty3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/carrito/3/buy/:page?/:rpp?', {templateUrl: 'js/app/carrito/1/buy.html', controller: 'CarritoBuy3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/carrito/3/add/:id', {templateUrl: 'js/app/carrito/1/add.html', controller: 'CarritoAdd3Controller', resolve: {auth: authenticationClientePromise}});
        //------------Tabla Extras Perfil 3
        $routeProvider.when('/extras/3/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ExtrasPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/extras/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ExtrasView3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/extras/3/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ExtrasPlist3Controller', resolve: {auth: authenticationClientePromise}});
        //------------Tabla Pedido Perfil 3
        $routeProvider.when('/pedido/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PedidoView3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/pedido/3/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/pedido/3/xtienda/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXtiendaPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/pedido/3/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PedidoXusuarioPlist3Controller', resolve: {auth: authenticationClientePromise}});
        //------------Tabla Plato Perfil 3
        $routeProvider.when('/plato/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PlatoView3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/plato/3/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/plato/3/xextras/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoXextrasPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/plato/3/xtipoplato/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlatoXtipoplatoPlist3Controller', resolve: {auth: authenticationClientePromise}});
        //------------Tabla Ticket Perfil 3
        $routeProvider.when('/ticket/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TicketView3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/ticket/3/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketPlist3Controller', resolve: {auth: authenticationClientePromise}});
        $routeProvider.when('/ticket/3/xpedido/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TicketXpedidoPlist3Controller', resolve: {auth: authenticationClientePromise}});
        //------------FIN PERFIL 3

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
