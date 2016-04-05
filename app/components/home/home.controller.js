class HomeController {
  constructor(q, homeService) {
    this.q = q;
    this.random = homeService;
    this.title = 'World';
  }

  changeName() {
    this.title = 'angular-tips';
  }
}

HomeController.$inject = ['$q'];

module.exports = HomeController;
