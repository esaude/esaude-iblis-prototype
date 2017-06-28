//
// describe.only('PatientController', function() {
// 	var controller, ds;
// 	var view = 'app/patient/patient.html';
// 	// var patients = mockData.getMockPatients();
// 	 var patient = mockData.getMockPatient();
//
// 	beforeEach(function() {
// 		bard.appModule('app.patients');
// 		// module('app.patients', bard.fakeToastr);
// 		bard.inject('$controller', '$state', '$log', '$rootScope', '$q', 'dataservice' );
// 	});
//
// 	beforeEach(function() {
// 		ds = {
// 			getPatient: function(id) {
// 				return $q.when(patient);
// 			}
// 		};
//
// 		controller = $controller('PatientController', {
// 			dataservice: ds
// 		});
// 
// 		// controller = $controller('PatientController');
//  		// console.info(controller);
//
// 		// $rootScope.$apply();
// 	});
//
// 	it('should be created successfully', function() {
// 		expect(controller).to.be.defined;
// 	});
//
// 	it('should have empty patient array before activation', function() {
// 		// expect(controller.patient).to.have.length(0);
// 		expect(controller.patient).to.be.undefined;
// 	});
//
// 	describe('after activation', function() {
// 		beforeEach(function() {
// 			// bard.inject('$state');
// 			// $rootScope.$apply();
// 		});
//
// 		it('should have title of Patient', function() {
// 			expect(controller.title).to.equal('Paciente');
// 		});
//
// 		// it('should have called dataservice.getPatient 1 time', function() {
// 		// 	expect(dataservice.getPatient).to.have.been.calledOnce;
// 		// });
//
// 		it('should have 1 Patient', function() {
// 			console.info(patient);
// 			console.info(controller);
// 			expect(controller.patient).to.have.length(patient);
// 		});
//
// 		// it('should have logged "Activated" ', function() {
// 		// 	expect($log.info.logs).to.match('Detalhe ');
// 		// });
// 	});
// });
