/// <reference path="../../../app/bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../app/scripts/app.ts" />

describe("Photos Controller Test", () => {
    // Setting a variables needed to perform test
    var $q,
        toastr = {
            error(error) {},
            info(info) {}
        },
        DataService,
        scope,
        $controller,
        ctrlPhotos;

    beforeEach(() => {

        angular.mock.inject(($injector) => {
            $q = $injector.get('$q');
            var $rootScope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            scope = $rootScope.$new();
        });
    });

//Positive
    it('Should <DO SOMETH.>', () => {
        DataService = {
            getProfile: () => {
                // Create a postponed service which can be returned in promise
                var d = $q.defer();
                // emulating resolution
                d.resolve({ FirstName: 'Andriy', LastName: 'Shepitsen', UserName: 'andriy.shepitsen@aol.com' });
                return d.promise;
            }
        };

        ctrlPhotos = $controller('PhotosCtrl', {
            $scope: scope,
            DataService: DataService,
            toastr: toastr
        });
        scope.$apply();


         expect(1).toBe(1);
        //expect(ctrlPhotos.).toBeDefined();
        //expect(ctrlPhotos.).toBe();
    });

    it('Should    when error  ', () => {
        // Emulating Db request
        DataService = {
            getProfile: () => {
                // Create a postponed service which can be returned in promise
                var d = $q.defer();
                // emulating resolution
                d.reject();
                return d.promise;
            }
        };


        ctrlPhotos = $controller('PhotosCtrl', {
            $scope: scope,
            DataService: DataService,
            toastr: toastr

        });
     
        spyOn(ctrlPhotos, 'ShowError');
        scope.$apply();

        expect(2).toBe(2);
       // expect(ctrlPhotos.error).toBeDefined();
       // expect(ctrlPhotos.ShowError).toHaveBeenCalled();
    });
});

