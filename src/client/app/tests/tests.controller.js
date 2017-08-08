(function () {
  'use strict';

  angular
    .module('app.tests')
    .controller('TestsController', TestsController);

  TestsController.$inject = ['$q', 'dataservice', 'logger', '$translate'];

  /* @ngInject */
  function TestsController($q, dataservice, logger, $translate) {
    var vm = this;
    vm.news = {
      title: 'Tests'
    };

    vm.messageCount = 0;
    vm.tests = [];
    vm.title = 'Tests';

    vm.goToNewTest = goToNewTest;

    vm.testState = ['.btn', '.btn-default', '.btn-primary', '.btn-success',
      '.btn-info', '.btn-warning', '.btn-danger', '.btn-link'];

    /////////
    activate();

    function activate() {
      var promises = [getTests()];
      return $q.all(promises).then(function () {
        $translate('ACTIVATION_TESTS').then(function (translationValue) {
          logger.info(translationValue);
        });
      });
    }

    function getTests() {
      return dataservice.getTests().then(function (data) {
        vm.tests = data;
        return vm.tests;
      });
    }

    function goToNewTest($state) {
    }
  }

})();
