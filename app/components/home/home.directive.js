HomeController = require('./home.controller');

class HomeDirective {
  constructor() {
    this.restrict = 'EA';
    this.controller = HomeController;
  }

  link(scope, element, attr, ctr) {

    console.log(ctr);
    console.log(ctr.q);

  }
}

module.exports = HomeDirective;
