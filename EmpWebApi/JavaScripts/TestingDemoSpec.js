
describe("DepartmentController", function () {
    console.log("DepartmentController describe");
    var $scope, $rootScope, Controller;

    var scope, $controllerConstructor, mockedEventService, $qservice;

    beforeEach(angular.mock.module('demoApp'));

    beforeEach(inject(function ($controller, $rootScope, departmentData,$q) {
        scope = $rootScope.$new(true);
        mockedEventService = departmentData;
        $qservice = $q;
        deferedProject = $q.defer();
        spyOn(mockedEventService, 'getDepartment').and.returnValue(deferedProject.promise);
        Controller = $controller('DepartmentController', { $scope: scope, departmentData: mockedEventService});
     //   initializeTest();
    }));

    it("should return DepartmentController", function () {
            scope.hello();         
            expect(scope.abc).toEqual('hello');
        });

    //it("should return list of department", function () {
    //    scope.DepartmentList();
    //    expect(scope.department).toEqual([{ "ID": 1, "DName": "Java" }, { "ID": 2, "DName": ".Net" }, { "ID": 4, "DName": "Ruby" }, { "ID": 5, "DName": "C" }, { "ID": 6, "DName": "C++" }, { "ID": 7, "DName": "Python" }]);
    //})
    //function initializeTest() {
    //    projectController = $controllerConstructor('DepartmentController', {
    //        $scope: scope,
            
    //    });
    //}
});


