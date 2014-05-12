/// <reference path="../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../bower_components/dt-ui-router/angular-ui-router.d.ts" />

/// <reference path="../bower_components/dt-toastr/toastr.d.ts" />
/// <reference path="models/IBreederProfile.ts" />
/// <reference path="filters/BoolString.ts" />
/// <reference path="services/DataService.ts" />
/// <reference path="directives/BreederDetails.ts" />

/// <reference path="controllers/EditCtrl.ts" />
//#ref

var profile = angular.module("profile", ['ui.router']);

profile.filter('boolString', () => {
    return (value:boolean):string => {
        return BoolString.filter(value);
    }
});

profile.directive("breederDetails", breederDetails);


profile.controller("EditCtrl", EditCtrl);
//#ctrl

profile.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

profile.value("toastr", toastr)
profile.service("DataService", DataService);

profile.config(
    ["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/profile");

            $stateProvider
                .state("profile", {
                    url: "/profile",
                    templateUrl: "../views/profile.html"
                })
                .state("edit", {
                    url: "/profile/edit",
                    controller: "EditCtrl",
                    templateUrl: "../views/profile-edit.html"
                })
//#state
        }]);

