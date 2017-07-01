(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    TopNavController.$inject = ['$scope', '$translate'];

    /* @ngInject */
    function TopNavController($scope, $translate) {
      var vm = this;
      $scope.isCollapsed = true;

      vm.changeLanguage = changeLanguage;

      function changeLanguage(langKey) {
        $translate.use(langKey);
      }
    }

    return directive;
  }
})();
