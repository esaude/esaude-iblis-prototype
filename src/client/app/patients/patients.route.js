(function() {
  'use strict';

   angular
    .module('app.patients')
	.run(appRun);

   appRun.$inject = ['routerHelper'];

	/* @ngInject */
	function appRun(routeHelper) {
		routeHelper.configureStates(getStates());
	}

	function getStates() {
		return [
			{
				state: 'patients',
				config: {
					url: '/patients',
					templateUrl: 'app/patients/patients.html',
					controller: 'PatientsController',
					controllerAs: 'vm',
					title: 'Patients',
					settings: {
						nav: 3,
            icon: 'fa fa-users fa-lg',
						content: 'Pacientes'
					}
				}
			},
			// {
			// 	state: 'patient',
			// 	config: {
			// 		url: '/patient',
			// 		templateUrl: 'app/patients/patient.html',
			// 		controller: 'PatientController',
			// 		controllerAs: 'vm',
			// 		title: 'paticiente',
			// 		settings: {
			// 			nav: 3,
			// 			content: '<i class="fa fa-user fa-lg"> </i>  Paciente',
			// 		}
			// 	}
			// },
			{
				state: 'patient',
				config: {
					url: '/patient/:nid',
					templateUrl: 'app/patients/patient-detail.html',
					controller: 'PatientController',
					controllerAs: 'vm',
					title: 'detalhes paciente',
					settings: {
						content: '<i class="fa fa-user fa-lg"></i> Paciente '
					}
				}
			}
		];
	}
})();
