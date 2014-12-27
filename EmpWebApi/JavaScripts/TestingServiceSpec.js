describe("departmentServiceSpec",function() {
    var httpBackend, _projectService;

    beforeEach(angular.mock.module("demoApp"));
    
    beforeEach(inject(function(projectService, $httpBackend){
        httpBackend = $httpBackend;
        _projectService = projectService;
    }))

    it("should get department list", function() {
        var departmentList = new Array();
        var department = new Object();
        department["Id"] = 1;
        department["DName"] = "Java";
        departmentList.push(department);

        httpBackend.expectGET('/api/department/').respond(departmentList);
        departmentData.getDepartment().then(function (data) {
            expect(data.length).toBe(5);

        });
      
        httpBackend.flush();
    });
})