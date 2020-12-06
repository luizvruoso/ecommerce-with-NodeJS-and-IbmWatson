var express = require('express');

const ibmWatson = require('../lib/ibmWatsonCredentials');

module.exports = function (route) {
    // GET na raiz logada (AKA Dashboard)
    console.log(route);
    console.log(route.app);
    route.get('/', function (req, res) {
        route.app.controller.controllerStore.index(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/index', function (req, res) {
        route.app.controller.controllerStore.index(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/carrinho', function (req, res) {
        route.app.controller.controllerStore.carrinho(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/produto', function (req, res) {
        route.app.controller.controllerStore.produto(route, req, res);
    });
    
    route.get('/chatbot', function (req, res) {
        route.app.controller.controllerStore.chatbot(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.post('/assistant', function (req, res) {
        route.app.controller.controllerStore.callAssistant(route, req, res);
    });
   
}