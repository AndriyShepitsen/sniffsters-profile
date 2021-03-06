/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

interface I#uname# extends ng.IScope {
    test:string;
}

var #jname#:() => ng.IDirective = () => {

    return{
        restrict: 'E',
        templateUrl: 'views/directives/#dname#.html',
        transclude: true,
        // replace directive tag with template info
        replace: true,
        scope: {
            ctrl: '=',

            text: '@',
            func: '&'
        },
        link: (scope:I#uname#, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {



        }
    }
}
