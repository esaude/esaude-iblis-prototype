(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      //patients
      getMessageCount: getMessageCount,
      getPatients: getPatients,
      getTests: getTests,

      //patient
      getPatient: getPatient,
      addPatient: addPatient,
      savePatient: savePatient,
      deletePatient: deletePatient
    };

    return service;

    function getMessageCount() {
      logger.info('Original getMessageCount called');
      return $q.when(0);
    }

    /**
     *  Patient CRUD
     */
    function getPatient(id) {
      return $http.get('/api/patient/' + id).then(success).catch(fail);

      function success(response) {
        return response.data[0];
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPatient')(e);
      }
    }

    function getPatients() {
      return $http.get('/api/patients').then(success).catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(description) {
        return exception.catcher('XHR Failed for getPatients')(description);
      }
    }

    function addPatient(patient) {
      return $http.post('/api/patients/', patient).then(success).catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(description) {
        return exception.catcher('XHR Failed for getPatients')(description);
      }
    }

    function savePatient() {
      // return $
    }

    function deletePatient() {

      function success(response) {
        return response.data;
      }

      function fail(description) {
        return exception.catcher('XHR Failed for getPatients')(description);
      }

    }

    function getTests() {
      return $http.get('/api/tests').then(success).catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getTests')(e);
      }
    }

  }//dataservice

})();
