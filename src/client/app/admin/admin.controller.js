(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function AdminController(logger) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      logger.info('Activated Admin View');

      vm.options = {legend: {display: true}};

      vm.labels1 = ["Specimen Accepted", "Specimen Not collected", "Specimen Rejected"];
      vm.data1 = [300, 500, 100];

      vm.labels2 = ["Started", "Completed", "Verified", "Pending"];
      vm.data2 = [300, 500, 100, 100];
    }
  }

})();
