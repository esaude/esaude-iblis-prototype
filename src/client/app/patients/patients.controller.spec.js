/* */
describe.only('PatientsController', function () {
  var controller;
  var patients = mockData.getMockPatients();

  beforeEach(function () {
    bard.appModule('app.patients');
    module('app.patients');
    bard.inject('$controller', '$state', '$log', '$rootScope', '$q', '$httpBackend');
  });

  beforeEach(function () {
    var ds = {
      getPatients: function () {
        return $q.when(patients);
      }
    };

    controller = $controller('PatientsController', {
      dataservice: ds
    });

    i18nUtil();

  });

  var i18nUtil = function () {
    $httpBackend.whenGET('/app/core/i18n/pt.json').respond(200, {});
    $httpBackend.whenGET('/app/core/i18n/en.json').respond(200, {});
  };


  it('should be created successfully', function () {
    expect(controller).to.be.defined;
  });

  it('should have empty patients array before activation', function () {
    expect(controller.patients).to.exist;
  });

  describe('after activation ', function () {
    beforeEach(function () {
      $rootScope.$apply();
    });

    it('should have people ', function () {
      expect(controller.patients).to.have.length.above(0);
    });

    it('should have exact mock people ', function () {
      // $rootScope.$apply();
      expect(controller.patients).to.have.length(patients.length);
    });


    xit('selecting a person triggers a state change ', function () {
      $rootScope.$apply();
      expect($state.is('patient')).to.true;

    });
  });
});
