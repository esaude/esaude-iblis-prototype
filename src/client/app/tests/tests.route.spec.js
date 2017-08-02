describe('TestsController', function () {
  describe('state', function () {
    var view = 'app/tests/tests.html';

    beforeEach(function () {
      module('app.tests', bard.fakeToastr);
      bard.inject('$state', '$templateCache', '$rootScope');
    });

    beforeEach(function () {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /tests ', function () {
      expect($state.href('tests', {})).to.equal('/tests');
    });

    it('should map /tests route to tests View template ', function () {
      expect($state.get('tests').templateUrl).to.equal(view);
    });

    it('of tests should work with $state.go ', function () {
      $state.go('tests');
      $rootScope.$apply();
      expect($state.is('t'));
    });
  });
});
