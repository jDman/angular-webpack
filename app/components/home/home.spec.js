const home = require('./index');

describe('app', function() {
  beforeEach(angular.mock.module(home));

  it('testit', function() {
    console.log('testing');
  });
});
