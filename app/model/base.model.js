const angular = require('angular');

class BaseModel {
  constructor() {
    this.stuff = 'ffff';
  }

  baseTest() {
    console.log('I am the base ' + this.stuff);
  }
}

module.exports = angular.module('base.model', [])
  .service('BaseModel', BaseModel)
  .name;
