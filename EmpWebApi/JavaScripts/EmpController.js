
app.controller("DeptController", ["$scope", "$http", function ($scope, $http) {
    $scope.hellomessage = "This is angular demo";
    alert("Empcontroller");
    $scope.EmployeeList = function () {
          alert("Employee2");
    }

}])

