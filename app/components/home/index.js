const angular = require('angular')
    , uirouter = require('angular-ui-router');

const routing = require('./home.route')
    , HomeController = require('./home.controller')
    , HomeService = require('./home.service')
    , HomeDirective = require('./home.directive');

const homeModule = angular.module('app.home', [uirouter.default])
                     .config(routing)
                     .controller('HomeController', HomeController)
                     .service('homeService', HomeService)
                     .directive('homeDirective', HomeDirective);

module.exports = homeModule.name;
