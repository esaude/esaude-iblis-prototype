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

    var english = {
      "Title": "Internationalization",
      "Language":    "Language",
      "Languages": {
          "English": "English",
          "Portuguese": "Portuguese"
      },
      "Created _By": "Created by eSaude 2",
      "Splash_Msg": "Loading...",
      "Dashboard": "Dashboard",
      "Admin": "Administrator",
      "First_Name": "First_Name",
      "Last_Name": "Last_Name",
      "Age": "Age",
      "Location": "Location",
      "Patients": "Patients",
      "Message_Count": "{messageCount, plural, 0={No Messages} one{1 Message} other{# Messages}}",
      "Admin_Unauthorized": "Sign in to access administrator resources",
      "Summary_Date": "Summary Date",
      "Messages":"72 Results",
      "Greeting": "{{name}} is logged in",
      "NID": "Patient NID",
      "Name": "Name",
      "Gender": "Gender",
      "Age": "Age",
      "Actions": "Actions",
      "ACTIVACTION_DASH": "Dashboard View Activacted",
      "ACTIVACTION_ADMIN": "Admin View Activacted",

      "Requisition_Date":"Requisition Date",
      "Requisition_ID":"Requisition ID",
      "NID":"NID",
      "":"",
      "":"",
      "":""
    };
    var portuguese = {
      "Title": "Internacionalização",
      "Language":    "Língua",
      "Languages": {
          "English": "Inglês",
          "Portuguese": "Português"
      },
      "Created _By": "Criado por eSaude",
      "Splash_Msg": "Carregando...",
      "Dashboard": "Painel de controle",
      "Admin": "Administrador",
      "First_Name": "Primeiro Nome",
      "Last_Name": "Apelido",
      "Age": "Idade",
      "Location": "Localização",
      "Patients": "Pacientes",
      "Message_Count": "{messageCount, plural, 0={Sem Mensagens} one{1 Mensagem} other{# Mensagens}}",
      "Admin_Unauthorized": "Faça login para acessar os recursos do administrador",
      "Summary_Date": "Data de Resumo",
      "Messages":"72 Resultados",
      "Greeting": "{{name}} está logado",
      "NID": "Patient NID",
      "Name": "Nome",
      "Gender": "Genero",
      "Age": "Idade",
      "Actions": "Acções",
      "ACTIVACTION_DASH": "Pagina Dashboard Activa",
      "ACTIVACTION_ADMIN": "Pagina Administracao Activa",

      "Requisition_Date":"Data de Requisição",
      "Requisition_ID":"Requisição de ID",
      "NID":"NID",
      "":"",
      "":"",
      "":""
    };

    $translateProvider.translations('en', english);
    $translateProvider.translations('pt', portuguese);

    // $translateProvider.preferredLanguage('en');
    // $translateProvider.registerAvailableLanguageKeys(['en'], {
    //     'en-US': 'en',
    //     ''
    // });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useSanitizeValueStrategy('sanitize');


    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
