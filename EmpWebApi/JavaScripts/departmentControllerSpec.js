/// <reference path="Empangular.js" />

describe('employeeControllerSpec', function () {
    //   alert("before each1 2");
    var scope, $controllerConstructor, mockedEventService, log, $qservice, EmployeeController, defered, defered1;

    beforeEach(angular.mock.module("app"));
    alert("before each1 ");
    beforeEach(inject(function ($controller, $rootScope, $log, $q, departmentData) {
        alert("before each2 ");
        scope = $rootScope.$new(true);
        $controllerConstructor = $controller;
        mockedEventService = departmentData;
        log = $log;
        $qservice = $q;
        defered = $q.defer();
        defered1 = $q.defer();
        spyOn(mockedEventService, 'getDashBoardDetails').and.returnValue(defered1.promise);

        //Initialize fixture
     //   initializeTest();
    }));

    it("contains spec with an expectation", function () {
        alert("emp controller");
        expect(true).toBe(true);
    });
    //function initializeTest() {
    //    alert("initializeTest");
    //    indexController = $controllerConstructor('EmployeeController', {
    //        $scope: scope,
    //        indexService: mockedEventService,
    //        $window: window
    //    });
    //}

})