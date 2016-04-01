class HomeController {
  constructor(homeService) {
    this.random = homeService;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

module.exports = HomeController;
