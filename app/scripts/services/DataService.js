/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
var DataService = (function () {
    function DataService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    DataService.prototype.getProfile = function () {
        var d = this.$q.defer();

        this.$http.get('http://localhost:44300/BreederPersonal/GetProfile').success(function (result) {
            d.resolve(result);
        }).error(function (data, error) {
            // console.log(data)
            // console.log(error)
            d.reject();
        });
        return d.promise;
    };
    DataService.prototype.updateProfile = function (t) {
        var d = this.$q.defer();

        this.$http.post('http://localhost:44300/BreederPersonal/UpdateUserProfile', { BreederViewModel: t }).success(function () {
            d.resolve();
        }).error(function (data, error) {
            // console.log(data)
            // console.log(error)
            d.reject();
        });
        return d.promise;
    };
    return DataService;
})();
//# sourceMappingURL=DataService.js.map
