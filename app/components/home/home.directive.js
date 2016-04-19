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

  link(scope, el, attrs, ctrl) {
    function usersList() {
      let randomUser = ctrl.model
        .generateRandomUsers(ctrl.model.users);

      let stream = randomUser.subscribe(user => {
        renderUsers(user, el)
      });
    }

    function renderUsers(userData, selector) {
      let titleNameEl = selector[0].querySelector('.testTitle');

      titleNameEl.innerHTML = userData.login;
    }

    usersList();
  }

  static directiveFactory() {
    return new HomeDirective();
  }
}

module.exports = angular.module('home.directives', [])
  .directive('homeDirective', HomeDirective.directiveFactory)
  .name;
