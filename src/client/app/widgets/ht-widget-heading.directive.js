(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htWidgetHeading', htWidgetHeading);

  /* @ngInject */
  function htWidgetHeading() {
    //Usage:
    //<div ht-widget-heading title="vm.map.title"> </div>
    // Creates:
    // <div ht-widget-heading=""
    //  title = "Movie"
    // allow-collapse="true" > </div>
    var directive = {
      scope: {
        'title': '@',
        'subtitle': '@',
        'rightText': '@',
        'allowCollapse': '@'
      },
      templateUrl: 'app/widgets/widget-heading.html',
      restrict: 'EA',
      link: linl
    };
    return directive;

    function link(scope, element, attr) {
      scope.toggleContent = function () {
        if (scope.allowCollapse === 'true') {
          var content = angular.element(element).siblings('.widget-content');
          content.toggle();
        }
      };
    }
  }

})();
