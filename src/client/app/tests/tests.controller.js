(function() {
	'use strict';

	angular
		.module('app.patients')
		.controller('TestsController', TestsController);

	TestsController.$inject = ['$q', 'dataservice', 'logger'];

	/* @ngInject */
	function TestsController($q, dataservice, logger) {
		var vm = this;
		vm.news = {
			title: 'Tests'
		};

		vm.messageCount = 0;
		vm.tests = [];
		vm.title = 'Tests';

		vm.testState = ['.btn', '.btn-default', '.btn-primary', '.btn-success',
		 '.btn-info', '.btn-warning', '.btn-danger', '.btn-link'];
		
		/////////
		activate();

		function activate() {
			var promises = [getTests()];
			return $q.all(promises).then(function() {
				logger.info('Pagina de Tests Activa ');
			});
		}

		function getTests() {
			return dataservice.getTests().then(function(data) {
				vm.tests = data;
					console.log(vm.tests);
				return vm.tests;
			});
		}
	}//testCOntroller


})();