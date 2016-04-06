const angular = require('angular');

class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

module.exports = angular.module('home.service', [])
  .service('RandomNames', RandomNames)
  .name;
