(function () {
  'use strict';

  var config = {
    appErrorPrefix: '[iBlis Error] ',
    appTitle: 'iBlis'
  };

  angular.module('app.core')
    .value('config', config)
    .config(toastrConfig)
    .config(configure)
    .run(function ($rootScope, logger) {
      var translateChangeSuccess = $rootScope.$on('$translateChangeSuccess', function () {
        logger.info('Translation SUCCESS ');
      });
      var translateChangeError = $rootScope.$on('$translateChangeError', function () {
        logger.info('Translation ERROR ');
      });

      $rootScope.$on('$destroy', translateChangeSuccess);
      $rootScope.$on('$destroy', translateChangeError);
    });

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider',
                       '$translateProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider,
                     $translateProvider) {

    $translateProvider
      .addInterpolation('$translateMessageFormatInterpolation')
      .preferredLanguage('en')
      .fallbackLanguage('pt')
      .useStaticFilesLoader({
        prefix: '/app/core/i18n/',
        suffix: '.json'
      });
    // $translateProvider.registerAvailableLanguageKeys(['en'], {
    //     'en-US': 'en',
    //     ''
    // });
    //Use this for browser sentive locale
    // $translateProvider.determinePreferredLanguage();

    //Avoid script injection
    $translateProvider.useSanitizeValueStrategy('sanitize');

    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({docTitle: config.appTitle + ': '});
  }

})();
