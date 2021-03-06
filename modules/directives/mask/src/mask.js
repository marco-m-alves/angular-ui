// Generated by CoffeeScript 1.3.3
/*
 Attaches jquery-ui input mask onto input element
*/

angular.module('ui.directives').directive('uiMask', [
  function() {
    return {
      require: 'ngModel',
      scope: {
        uiMask: '='
      },
      link: function($scope, element, attrs, controller) {
        controller.$render = function() {
          var value;
          value = controller.$viewValue || '';
          element.val(value);
          return element.mask($scope.uiMask);
        };
        controller.$parsers.push(function(value) {
          var isValid;
          isValid = element.data('mask-isvalid');
          controller.$setValidity('mask', isValid);
          return element.mask();
        });
        return element.bind('keyup', function() {
          return $scope.$apply(function() {
            return controller.$setViewValue(element.mask());
          });
        });
      }
    };
  }
]);
