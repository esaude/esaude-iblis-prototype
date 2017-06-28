(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'iBlis',
      description: 'Aplicacao para gerir dados Laboratorias'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Dashboard';

    vm.options = {legend: {display: true}};

    vm.labels1 = ["Specimen Accepted", "Specimen Not collected", "Specimen Rejected"];
    vm.data1 = [300, 500, 100];

    vm.labels2 = ["Started", "Completed", "Verified", "Pending"];
    vm.data2 = [300, 500, 100, 100];

    vm.labels3 = ["Specimen Accepted", "Specimen Not collected", "Specimen Rejected"];
    vm.data3 = [257, 450, 95, 88];

    vm.labels4 = ["Started", "Completed", "Verified", "Pending"];
    vm.data4 = [156, 420, 96, 45];

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();
