(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[iBlis Error] ',
    appTitle: 'iBlis'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$translateProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $translateProvider) {

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
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

  core.run(function($rootScope) {
     $rootScope.$on('$translateChangeSuccess', function() {
       console.info('Tranlation SUCCESS ');
     })
     $rootScope.$on('$translateChangeError', function() {
       console.info('Tranlation ERROR ');
     })
  });

})();
