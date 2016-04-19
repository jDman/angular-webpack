const angular = require('angular');
const BaseModel = require('./base.model');

let {Rx, Observable} = require('rx')
  , jq = require('jquery');

class UserModel {
  constructor() {
    this.url = 'https://api.github.com/users';
    this.users = this.getUsers();
  }

  generateRandomUsers(users) {
    return this.users.map(response =>
      response[Math.floor(Math.random() * response.length)]
    );
  }

  getUsers() {
    let requestStream = Observable.just(this.url);

    let responseStream = requestStream
     .flatMap(
       requestUrl => Observable.fromPromise(jq.getJSON(requestUrl))
     );

     return responseStream;
  }
}

UserModel.$inject = ['BaseModel'];

module.exports = angular.module('user.model', [BaseModel])
  .service('UserModel', UserModel)
  .name;
