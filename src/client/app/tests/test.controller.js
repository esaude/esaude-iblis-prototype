(function() {
  'use strict';

  angular
    .module('app.tests')
    .controller('TestController',TestController);

    TestController.$inject = ['$q', 'dataservice', 'logger', '$translate'];

    /* @ngInject */
    function TestController($q, dataservice, logger, $translate) {
        var vm = this;
        vm.news = { title: 'Test' };





    }

})();
