const angular = require('angular')
    , uirouter = require('angular-ui-router');

const routing = require('../../routing')
    , HomeController = require('./home.controller')
    , randomNames = require('./home.service')
    , homeDirective = require('./home.directive');

const homeModule = angular.module('app.home',
    [uirouter.default, randomNames, homeDirective
  ])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;

module.exports = homeModule;
