class HomeController {
  constructor(q, userModel, randomNames) {
    this.q = q;
    this.users = userModel.users;
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

HomeController.$inject = ['$q', 'UserModel', 'RandomNames'];

module.exports = HomeController;
