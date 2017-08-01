(function() {
	'use strict';

	angular
		.module('app.tests')
		.controller('TestsController', TestsController);

	TestsController.$inject = ['$q', 'dataservice', 'logger', '$state', '$translate'];

	/* @ngInject */
	function TestsController($q, dataservice, logger, $state, $translate) {
		var vm = this;
		vm.news = {
			title: 'Tests'
		};

		vm.messageCount = 0;
		vm.tests = [];
		vm.title = 'Tests';

		vm.goToNewTest = goToNewTest;
		// vm.getMessageCount = getMessageCount;

		vm.testState = ['.btn', '.btn-default', '.btn-primary', '.btn-success',
		 '.btn-info', '.btn-warning', '.btn-danger', '.btn-link'];

		/////////
		activate();

		function activate() {
			var promises = [getTests()];
			return $q.all(promises).then(function() {
				$translate('ACTIVACTION_TESTS').then(function(translationValue) {
						logger.info(translationValue);
				});
			});
		}

		function getTests() {
			return dataservice.getTests().then(function(data) {
				vm.tests = data;
					console.log(vm.tests);
				return vm.tests;
			});
		}

		function getMessageCount() {
			 vm.messageCount = vm.tests.length;
			//  return vm.messageCount;
		}

		function goToNewTest($state) {
			console.info("Test");
			// $state.go('test');
		}
	}//testCOntroller

})();
