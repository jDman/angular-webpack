const homeTemplate = require('../templates/home.html')

const routes = $stateProvider => {
  $stateProvider
    .state('home', {
      url: '/',
      template: homeTemplate,
      controller: 'HomeController',
      controllerAs: 'home'
    });
}

module.exports = routes;
