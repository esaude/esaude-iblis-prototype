(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception'];
  /* @ngInject */
  function dataservice($http, $q, exception) {
    var service = {
      //patients
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getPatients: getPatients,
      getTests: getTests,

      //patients
      getPatient : getPatient,
      addPatient: addPatient,
      savePatient: savePatient,
      deletePatient: deletePatient
    };

    return service;

    function getMessageCount() {
      console.info('Original getMessageCount called');
      return $q.when(0);

     }

    function getPeople() {
      return $http.get('/api/people').then(success).catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

    /**
     *  Patient CRUD
     */
    function getPatient(id) {
       return $http.get('/api/patient/'+id).then(success).catch(fail);

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
          // console.info("SUCCESS: getPatients");
          // console.info(response);
          return response.data;
        }

        function fail(description) {
          // console.error("Error occured in: getPatients");
          return exception.catcher('XHR Failed for getPatients')(description);
        }
    }

    function addPatient(patient){
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
