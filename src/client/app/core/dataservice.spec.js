describe.only('dataservice', function () {

  beforeEach(function () {
    bard.appModule('app.core');
    bard.inject('dataservice', '$rootScope', '$httpBackend');
  });

  var i18nUtil = function () {
    $httpBackend.whenGET('/app/core/i18n/pt.json').respond(200, {});
    $httpBackend.whenGET('/app/core/i18n/en.json').respond(200, {});
  };

  it('exists', function () {
    expect(dataservice).to.exist;
  });

  it('getMessageCount returns a value', function () {
    dataservice.getMessageCount().then(function (data) {
      expect(data).to.exist;
    });
    expect(dataservice.getMessageCount).to.exist;

  });

  it('getPatients returns an array of people', function () {


    $httpBackend.when('GET', '/api/patients').respond(200, [{}]);
    dataservice.getPatients().then(function (data) {
      expect(data).to.exist;
    });
    i18nUtil();
    $httpBackend.flush();
  });

  xit('getPatient return a single patient ', function () {

  });

  it('getPatients reports ERROR if server fails', function () {
    $httpBackend.when('GET', '/api/patients').respond(500, {desc: 'You failed '});
    dataservice.getPatients().catch(function (error) {
      expect(error.data.desc).to.match(/You failed/);
    });

    i18nUtil();
    $httpBackend.flush();
  });
});
