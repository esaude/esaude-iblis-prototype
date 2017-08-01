(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize', 'ngMessages',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'pascalprecht.translate', 'ui.bootstrap',
            'chart.js'
        ]);
})();
