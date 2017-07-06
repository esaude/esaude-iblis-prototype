(function() {
  'use strict';

  angular
    .module('app.tests')
    .controller('TestController',TestController);

    TestController.$inject = ['$q', 'dataservice', 'logger'];

    /* @ngInject */
    function TestController($q, dataservice, logger) {
        var vm = this;
        vm.news = { title: 'Test' };





    }

})();
