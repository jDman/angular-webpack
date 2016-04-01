const angular = require('angular')
    , uirouter = require('angular-ui-router');

const config = require('./config');

const home = require('./components/home');

const ngModule = angular.module('app', [uirouter.default, home])
                   .config(config);
