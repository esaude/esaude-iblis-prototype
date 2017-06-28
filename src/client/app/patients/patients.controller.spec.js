// /* */
// describe.only('PatientsController', function() {
// 	var controller;
// 	var patients = mockData.getMockPatients();
//
// 	beforeEach(function() {
// 		// bard.appModule('app.patients');
// 		// module('app.patients');
// 		bard.inject('$controller', '$state', '$log', '$rootScope', '$q');
// 	});
//
// 	// bard.verifyNoOutstandingHttpRequests();
// 	beforeEach(function() {
// 		var ds = {
// 			getPatients: function() {
// 				return $q.when(patients);
// 			}
// 		};
//
// 		controller = $controller('PatientsController', {
// 			dataservice: ds
// 		});
//
// 		$rootScope.$apply();
// 	});
//
//
// 	it('should be created successfully', function() {
// 		expect(controller).to.be.defined;
// 	});
//
// 	it('should have empty patients array before activation', function() {
// 		expect(controller.patients).to.exist;
// 	});
//
// 	describe('after activation ', function() {
// 		beforeEach(function() {
// 				// $rootScope.$apply();
// 		});
//
// 		it('should have people ', function() {
// 			expect(controller.patients).to.hav e.length.above(0);
// 		});
//
// 		it('should have exact mock people ', function() {
// 			// $rootScope.$apply();
// 			expect(controller.patients).to.have.length(patients.length);
// 		});
//
//
// 		it('selecting a person triggers a state change ', function() {
// 			controller.gotoPatient({id: 3});
// 			$rootScope.$apply();
// 			expect($state.current.name).to.equal('patient');
// 			expect($state.is('patient')).to.true;
//
// 		});
// 	});
// });
