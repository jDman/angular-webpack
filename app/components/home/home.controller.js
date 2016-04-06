class HomeController {
  constructor(q, randomNames) {
    this.q = q;
    this.random = randomNames;
    this.title = 'World';
  }

  changeName() {
    this.title = 'angular-tips';
  }

  randomName() {
    this.title = this.random.getName();
  }
}

HomeController.$inject = ['$q', 'RandomNames'];

module.exports = HomeController;
