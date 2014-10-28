
app.controller("DeptController", ["$scope", "$http", "$location", "$route", function ($scope, $http, $location, $route) {
    $scope.hellomessage = "This is angular demo";
    // alert("controller");
    //$scope.department = 
    $scope.department = {};
    $scope.departmentdetail = [];
    $scope.Depts = [];
    $scope.DeptName;
    $scope.Id;
    $scope.Name;
    $scope.Designation;
    $scope.Contactno;
    $scope.Emailid;

    var flag = false;
    $scope.DepartmentList = function () {
   //  alert("department");
      //  $scope.department[{}];
        $http({
            method: 'GET',
            url: "/api/department",

        }).success(function (data) {
            $("#depttable").show();
            $("#index").hide();
            //alert("success");
            $scope.department = data;
           
          //  alert($scope.department[0].DName);
            //$.each(data, function (key, value) {
            //    $scope.department.push({ DeptName: value.DName,Id:value.ID});
               
            //});
        }).error(function (data) {
            alert("error");
        });
    }

    //Create new department.
    $scope.Create = function () {
      //  alert("create");
        $location.url('/AddDepartment');
    }

    //Add department.
    $scope.Add = function () {
      
        var DeptName = $scope.DeptName;
      //  alert("add " + DeptName);
        $("#error").html("");
        $("#error").show();
        if (DeptName == undefined) {
         //   alert("if");
            $("#error").append("This field is required.");
            //  window.location.hash = "#/AddDepartment/";
        }
        else {
         //   alert("else");
            $http({
                method: 'GET',
                url: "/api/department",
            }).success(function (data) {
                var flag = false;
            //    alert("success" + JSON.stringify(data));
                var dept = JSON.stringify(data);
                $.each(data, function (key, value) {
                    if (DeptName == value.DName)
                    {
                        flag = true;
                        $("#error").append(DeptName + " already exist.");
                    }

                })
                if (!flag) {
                    $http({
                        method: 'POST',
                        url: "/api/department",
                        data: { "DName": "" + DeptName + "" },
                    }).success(function (data) {
                        $("#depttable").show();
                        $("#index").hide();
                        $("#AddDepartment").hide();
                        $scope.DepartmentList();
                        alert("success");
                    }).error(function (data) {
                        alert("error");
                    });
                }

            }).error(function (data) {
                alert("error");
            });
          
        }
    }

    //Edit view of department
    $scope.Edit = function (Dept, Id) {
        $("#Departmenttupdate").show();
        $("#depttable").hide();
        $("#index").hide();
      //  alert("edit " + " \n " + name + " || " + id);
        $scope.DeptName = Dept;
        $scope.Id = Id;
    }

    //Update department
    $scope.Update = function () {

        var DeptName = $scope.DeptName;
        var id = $scope.Id;
       
        alert("update " + " \n " + DeptName + " || " + id);
        $http({
            method: 'PUT',
            url: "/api/department/id",
            data: { "DName": "" + DeptName + "", "ID": "" + id + "" },
        }).success(function (data) {
          //  $("#depttable").show();
          //  $("#index").hide();
          //  $("#AddDepartment").hide();
          ///  $scope.DepartmentList();
            alert("success");
        }).error(function (data) {
            alert("error");
        });
    }

    //Detail of department.
    $scope.Detail = function (Dept, id) {
        var id = $route.current.params.Id;
        var name = $route.current.params.name;
    //    alert(id+" || "+name);
        $http({
            method: 'GET',
            url: "/api/employee",
        }).success(function (data) {
            flag = false;
            $scope.DeptName = name;
            $.each(data, function (key, value) {
                if (id == value.DepartmentID)
                {
                    $("#detailnotfound").hide();
                    $("#Deptdetail").show();
                    flag = true;
                  //  alert("name = " + value.Name);
                   $scope.departmentdetail.push({'Name': value.Name, 'Designation': value.Designation, 'Contactno': value.ContactNo, 'Emailid': value.Emailid });
                }
            })
            if (!flag) {
               // alert("flag = " + flag);
                $("#detailnotfound").show();
                $("#Deptdetail").hide();
            }

        }).error(function (data) {
            alert("error");
        });
    }

    //Delete department.
    $scope.Delete = function (Dept, id1) {
        
        //var id = $route.current.params.Id;
        //var name = $route.current.params.name;

        alert("delete  " + Dept + " || " + id1);
        $http({
            method: 'POST',
            url: "/api/department/id",
        }).success(function () {  
            alert("success");
        
        }).error(function (data) {
            alert("error");
        });
    }

    //Back to list.
    $scope.Back = function () {
       
        $("#detailnotfound").hide();
        $("#Deptdetail").hide();
        window.location.hash = "DepartmentList";
    }

    //cancel add dept.
    $scope.Cancel = function () {
        $route.reload();
    }
}])


//app.controller("EmpController", ["$scope","$http", function ($scope, $http) {
//  //  alert("EmployeeController");

//    $scope.EmployeeList = function () {
//        alert("Employee2");
//    }
  
//}])
