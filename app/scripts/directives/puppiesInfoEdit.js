/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

var puppiesInfoEdit = function () {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/puppies-info-edit.html',
        transclude: true,
        // replace directive tag with template info
        replace: true,
        scope: {
            ctrl: '=',
            text: '@',
            func: '&'
        },
        link: function (scope, element, attrs) {
        }
    };
};
//# sourceMappingURL=puppiesInfoEdit.js.map
