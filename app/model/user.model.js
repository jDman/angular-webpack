const angular = require('angular');
const BaseModel = require('./base.model');

let {Rx, Observable} = require('rx')
  , jq = require('jquery');

class UserModel {
  constructor() {
    this.url = 'https://api.github.com/users';
    this.users = this.getUsers();
  }

  getUsers() {
    let requestStream = Observable.just(
      this.url
    );

    let responseStream = requestStream
     .flatMap(
       requestUrl => Observable.fromPromise(jq.getJSON(requestUrl))
     );

    responseStream.subscribe(response => {
     console.log(response);
    });
  }
}

UserModel.$inject = ['BaseModel'];

module.exports = angular.module('user.model', [BaseModel])
  .service('UserModel', UserModel)
  .name;
