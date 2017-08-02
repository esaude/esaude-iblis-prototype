(function () {
  'use strict';

  angular
    .module('app.core', [
      'blocks.exception',
      'blocks.logger',
      'blocks.router',
      'chart.js',
      'ngAnimate',
      'ngMessages',
      'ngplus',
      'ngSanitize',
      'pascalprecht.translate',
      'ui.bootstrap',
      'ui.router'
    ]);
})();
