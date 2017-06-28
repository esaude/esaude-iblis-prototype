(function() {
	'use strict';

	angular
		.module('app.patients')
		.controller('PatientController', PatientController);

	PatientController.$inject = ['$state', '$q', '$stateParams', 'dataservice', 'logger'];

	/* @ngInject */
	function PatientController($state, $q, $stateParams, dataservice, logger) {
		var vm = this;
		// console.warn(vm);

		vm.patient = undefined;

		vm.goBack = goBack;
		vm.isUnchanged = isUnchanged;
		vm.getFullName = getFullName;
		vm.save = save;

		vm.title = 'Paciente';

		var patiendNID = $stateParams.nid;

		if(patiendNID) {
		activate();
		}

		vm.getPatient = getPatient;
		// vm.gotoPatient = gotoPatient;

		///////////////////////////////////////////////////

		function activate() {
			return getPatient(patiendNID).then(function() {
				logger.info('Pagina de Detalhes de Paciente Activa ');
			});
		}

		function cancel() {
			vm.patient = angular.copy(vm.original);
		}

		function getPatient(id) {
			return dataservice.getPatient(id)
				.then(function(result) {
					console.info(result);
					vm.patient = result;
					vm.original = angular.copy(vm.patient);
					logger.success('Encontrou 1 paciente');
					return vm.patient;
				});
		}

		function goBack() {
			$window.history.back();
		}

		function isUnchanged() {
			return angular.equals(vm.patient, vm.original);
		}

		function getFullName() {
			return vm.patient && vm.patient.firstName+' '+vm.patient.lastName;
		}

		function save() {
			vm.original = angular.copy(vm.patient);
			logger.success('Paciente modificado com sucesso');
		}

	}//patientController


})();
