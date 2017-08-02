(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', '$translate'];
    /* @ngInject */
    function AdminController(logger, $translate) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            $translate('ACTIVACTION_ADMIN').then(function (translationValue) {
                logger.info(translationValue);
            });
        }
    }

})();
