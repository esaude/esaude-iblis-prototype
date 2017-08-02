/* */
describe('patients route', function () {
  describe('state', function () {
    var viewPatients = 'app/patients/patients.html';
    var viewPatient = 'app/patients/patient-detail.html';


    beforeEach(function () {
      module('app.patients', bard.fakeToastr);
      bard.inject('$httpBackend', '$state', '$templateCache', '$rootScope');
    });

    beforeEach(function () {
      $templateCache.put(viewPatients, '');
    });

    it('should map state patients to url /patients ', function () {
      expect($state.href('patients', {})).to.equal('/patients');
    });

    it('should map /patients route to patients ViewPatients template', function () {
      expect($state.get('patients').templateUrl).to.equal(viewPatients);
    });

    it('of patients should work with $state.go', function () {
      $state.go('patients');
      $rootScope.$apply();
      expect($state.is('lars '));
    });

    it('should map patient to url patient/:id ', function () {
      expect($state.href('patient', {})).to.equal('/patient/');
    });

    it('should map /patient route to patient ViewPatient template', function () {
      expect($state.get('patient').templateUrl).to.equal(viewPatient);
    });
  });
});
