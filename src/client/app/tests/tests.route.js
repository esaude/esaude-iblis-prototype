(function () {
    'use stritct';

    angular
        .module('app.tests')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /** @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tests',
                config: {
                    url: '/tests',
                    templateUrl: 'app/tests/tests.html',
                    controller: 'TestsController',
                    controllerAs: 'vm',
                    title: 'Tests',
                    settings: {
                        nav: 4,
                        icon: 'fa fa-medkit fa-lg',
                        content: 'Testes '
                    }
                }
            },
            {
                state: 'test',
                config: {
                    url: '/test',
                    templateUrl: 'app/tests/test.html',
                    controller: 'TestController',
                    controllerAs: 'vm',
                    title: 'Test',
                    settings: {
                        // nav: 1,
                        ico: 'fa fa-flask fa-lg',
                        content: 'NEW_TEST'
                    }
                }
            }
        ];
    }
})();
