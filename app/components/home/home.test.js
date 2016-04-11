const home = require('./index');

describe('home', function() {
  beforeEach(angular.mock.module(home));

  it('testit', function() {
    console.log('testing');
  });

  describe('home:controller', function() {
    let $controller;

    beforeEach(angular.mock.inject(function(_$controller_) {
      $controller = _$controller_;
    }));

    it('title is initialized to World', function() {
      let ctrl = $controller('HomeController');
      expect(ctrl.title).toBe('World');
    });
  });
});
