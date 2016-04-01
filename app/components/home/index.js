const angular = require('angular')
    , uirouter = require('angular-ui-router');

const routing = require('./home.route')
    , HomeController = require('./home.controller')
    , HomeService = require('./home.service');

const homeModule = angular.module('app.home', [uirouter.default])
                     .config(routing)
                     .controller('HomeController', HomeController)
                     .service('homeService', HomeService);

module.exports = homeModule.name;
