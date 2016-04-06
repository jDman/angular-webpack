const angular = require('angular');
const HomeController = require('./home.controller');
const directiveTemplate = require('../../templates/home-directive.html');

class HomeDirective {
  constructor() {
    this.scope = {
      name: '@'
    };
    this.restrict = 'E';
    this.controller = HomeController;
    this.template = directiveTemplate;
  }

  link(scope, element, attrs, ctr) {
    console.log(scope, attrs);
  }
}

module.exports = angular.module('home.directives', [])
  .directive('homeDirective', HomeDirective)
  .name;
