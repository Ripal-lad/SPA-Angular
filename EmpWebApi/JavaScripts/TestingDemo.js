
var helloworld = function () {
    console.log("helloworld function");
    return "Hello world";
}

var demoApp = angular.module("demoApp",[]);

//demoApp.controller("democontroller", function ($scope) {
//    console.log("controller");
//    $scope.abc;
//    $scope.hello = function () {

//        console.log("$scope.hello");
//        $scope.abc = "hello";
//    }
//})
demoApp.controller("DepartmentController", function ($scope) {
    $scope.hellomessage = "This is angular demo";
    // alert("controller");
    //$scope.department = 
    $scope.department = {};
    $scope.departmentdetail = [];                  //, $http, $route, $location, departmentData, eventData
    $scope.Depts = [];
    $scope.DeptName;
    $scope.Id;
    $scope.Name;
    $scope.Designation;
    $scope.Contactno;
    $scope.Emailid;

    var flag = false;
    console.log("controller");
    $scope.abc;
    $scope.hello = function () {

        console.log("$scope.hello");
        $scope.abc = "hello";
    }
    $scope.DepartmentList = function () {
        //  alert("department");
        departmentData.getDepartment().then(function (data) {
            $scope.department = data;
        });
    }
})