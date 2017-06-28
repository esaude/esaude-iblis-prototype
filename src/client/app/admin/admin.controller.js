(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function AdminController(logger) {
    var vm = this;
    vm.title = 'Administrador';

    activate();

    function activate() {
      logger.info('Activated Administrator View');
    }
  }

})();
