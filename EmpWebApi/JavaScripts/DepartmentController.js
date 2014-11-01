
app.controller("DepartmentController", ["$scope", "$http", "$route", "$location", "departmentData", "eventData", function ($scope, $http, $route, $location, departmentData, eventData) {
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
        departmentData.getDepartment().then(function (data) {
            $scope.department = data;
        });
    }

    //Create new department.
    $scope.Create = function () {
      //  alert("create");
        $location.url('/AddDepartment');
    }

    //Add department.
    $scope.Add = function (DeptName) {
        flag = false;
        var DeptName = $scope.DeptName;
        $scope.department = {"ID":"","DName":DeptName};
     //   alert(DeptName);
        if (DeptName == undefined)
        {
         // alert("empty");
            $("#error").html("This field is required.");
        }
        else{
            //  alert(flag);
            departmentData.getDepartment().then(function (data) {
                //    $scope.department = data;
                flag = false;
                $.each(data, function (key, value) {
                    if (value.DName == DeptName)
                    {
                        flag = true;
                        $("#error").html(DeptName+" already exist.");
                    }

                })
                if (!flag) {
                    departmentData.saveDepartment($scope.department).then(function () {
                        window.location.hash = "DepartmentList";
                    });
                }
            });
        }
    }

    //Edit view of department
    $scope.Edit = function (Dept,id1) {
  /// alert(Dept+" || "+id1)
        var id = $route.current.params.Id;
        var name = $route.current.params.name;
        $scope.DeptName = { "DName": name,"ID":id };
       
    //    alert($scope.DeptName);
    }

    //Update department
    $scope.Update = function () {

        var DeptName = $scope.DeptName.DName;
        var Id = $scope.DeptName.ID;
     //    alert(DeptName+" || "+Id);
        if (DeptName == "") {
        //     alert("empty");
            $("#error").html("This field is required.");
        }
        else {
            //  alert(flag);
            departmentData.getDepartment().then(function (data) {
                //    $scope.department = data;
                flag = false;
                $.each(data, function (key, value) {
                    if (value.DName == DeptName) {
                        flag = true;
                        $("#error").html(DeptName + " already exist.");
                    }

                })
                if (!flag) {
                 //   alert("success = "+flag);
                    $scope.department = { "ID": "" + Id + "", "DName": "" + DeptName + "" };

                    departmentData.updateDepartment($scope.department).then(function () {
                        $("#msg").show().delay(3000).fadeOut();
                        // alert("success = ");
                    })
                }
            })
        }
    }

    //Cancel update.
    $scope.CancelUpdate = function () {
        $route.reload();
    }
    
    //Detail of department.
    $scope.Detail = function (Dept, id) {
        var id = $route.current.params.Id;
        var name = $route.current.params.name;
        $scope.DeptName = name;
     //   alert("detail = "+id+" || "+name);
        departmentData.getEmployee().then(function (data) {
         //   alert("list " + "\n" + data);
            flag = false;
            $.each(data, function (key, value) {
                if (id == value.DepartmentID)
                {
                    $("#detailnotfound").hide();
                    $("#Deptdetail").show();
                    flag = true;
                    $scope.departmentdetail.push({ 'Name': value.Name, 'Designation': value.Designation, 'Contactno': value.ContactNo, 'Emailid': value.Emailid });
                }
            })
            if (!flag) {
                $("#detailnotfound").show();
                $("#Deptdetail").hide();
            }
        });
    }

    //Delete department.
    $scope.Delete = function (Dept, id) {
        
       // alert("delete  " + Dept + " || " + id);
        if (confirm("Are you sure that you want to delete details of " + Dept + " ?"))
        {
            departmentData.deleteDepartment(id).then(function () {
                //alert("success");
                departmentData.getEmployee().then(function (data) {
                    //   alert("list " + "\n" + data);
                    flag = false;
                    $.each(data, function (key, value) {
                        if (id == value.DepartmentID) {
                            eventData.deleteEmployee(value.ID).then(function () {
                                flag=true;
                            });
                        }
                    });
                }),
                window.location.hash = 'DepartmentList';
            });
        }else{
            window.location.hash = 'DepartmentList';
        }
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


