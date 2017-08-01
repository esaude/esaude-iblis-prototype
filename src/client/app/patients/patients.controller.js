(function () {
    'use strict';

    angular
        .module('app.patients')
        .controller('PatientsController', PatientsController);

    PatientsController.$inject = ['$state', '$q', 'dataservice', 'logger', '$translate'];

    /* @ngInject */
    function PatientsController($state, $q, dataservice, logger, $translate) {
        var vm = this;

        vm.patients = [];
        vm.title = 'Patients';

        vm.currentEdit = {};
        /**
         *    API declaration and registration
         */
        vm.gotoPatient = gotoPatient;
        vm.edit = edit;
        vm.cancel = cancel;

        vm.newPatient = newPatient;

        //////////`
        activate();

        function activate() {
            var promises = [getPatients()];
            return $q.all(promises).then(function () {
                $translate('PATIENTS_ACTIVE').then(function (translationValue) {
                    logger.info(translationValue);
                });
            });
        }

        function getPatients() {
            return dataservice.getPatients().then(function (data) {
                vm.patients = data;
                return vm.patients;
            });
        }

        function gotoPatient(nid) {
            $state.go('patient', {nid: nid});
        }

        function edit(patient) {
            vm.currentEdit[patient.nid] = true;
            vm.itemToEdit = angular.copy(patient);
        }

        function cancel(nid) {
            vm.currentEdit[nid] = false;
        }

        function newPatient() {
            console.info("newPatient");
            $state.go('patient');
        }
    }
})();
