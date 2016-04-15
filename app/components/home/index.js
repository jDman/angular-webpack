const angular = require('angular')
    , uirouter = require('angular-ui-router');

const routing = require('../../routing')
    , HomeController = require('./home.controller')
    , userModel = require('../../model/user.model')
    , randomNames = require('./home.service')
    , homeDirective = require('./home.directive');

const homeModule = angular.module('app.home',
    [uirouter.default, userModel, randomNames, homeDirective]
  )
  .config(routing)
  .controller('HomeController', HomeController)
  .name;

module.exports = homeModule;
