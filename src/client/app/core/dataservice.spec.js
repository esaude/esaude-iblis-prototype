/* jshint -W117, -W030 */
describe.only('dataservice', function() {

	beforeEach(function() {
		bard.appModule('app.core');
		bard.inject('dataservice', '$rootScope', '$httpBackend');
	});

	it('exists', function() {
		expect(dataservice).to.exist;
	});

	it('getMessageCount returns a value', function() {
		dataservice.getMessageCount().then(function(data) {
			// console.info("Test getMessageCount called");
			expect(data).to.exist;
			// console.info(data);
		});

		$rootScope.$apply();
		expect(dataservice.getMessageCount).to.exist;
	});

	it('getPatients returns an array of people', function() {
		$httpBackend.when('GET', '/api/patients').respond(200, [{ }]);
		dataservice.getPatients().then(function(data) {
			expect(data).to.exist;
			// console.info('TESTS: getPatients called');
		});
		$httpBackend.flush(); 
	});

	it('getPatient return a single patient ', function() {
		
	});

	it('getPatients reports ERROR if server fails', function() {
		$httpBackend.when('GET', '/api/patients').respond(500, {desc: 'You failed '});
		dataservice.getPatients().catch(function(error) {
			console.log(error.data);
			expect(error.data.desc).to.match(/You failed/);
		});
		$httpBackend.flush();
	});
});