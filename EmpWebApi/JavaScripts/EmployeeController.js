
app.controller("EmployeeController", ["$scope", "$resource", "$route", "eventData", function ($scope, $resource, $route, eventData) {
    $scope.hellomessage = "This is angular demo";
    alert("Empcontroller");
    $scope.EmpList = {};
    $scope.department;
    $scope.DeptName;
    $scope.Id;
    $scope.Name;
    $scope.Designation;
    $scope.Contactno;
    $scope.Emailid;
    $scope.Empdata;
    $scope.Employee;
    $scope.SelectedOptions;
  //  $scope.Employee = new Employee({});

    $scope.department = {};

    $scope.EmployeeList = function () {
        //alert("Employee2");
      
        eventData.getEmployee().then(function (data) {
           // alert("list "+"\n"+data);
            $scope.EmpList = data;
        });
     //   var Empdata = $resource('/api/employee/');
    }

    // Add employee view
    $scope.Create = function () {

        eventData.getAllDepartment().then(function (data) {
            $scope.department = data;
        })
        //var dept = $resource('/api/department');
        //$scope.department = dept.query();
    }

    //Add Employee 
    $scope.Add = function (Empdata, DeptName) {
        alert("add");
        $("#errorname").html("");
        $("#errordept").html("");
        $("#erroremailid").html("");
        $("#errorcontactno").html("");
        $("#errordesignation").html("");
   
        var regexemail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var regexname = /^[A-Z]+[a-zA-Z''-'\s]*$/;
        var regdesignation = /^[A-Za-z- ]+$/;
        Department = $scope.Department;
        Name = $scope.Name;
        Designation = $scope.Designation;
        ContactNo = $scope.ContactNo;
        Emailid = $scope.Emailid;
        DeptId = $scope.DeptName.ID;
     //   alert("regexemail = " + regexemail);
        alert(Name + " || " + Designation + " || " + ContactNo + " || " + Emailid + " || " + DeptId);
        //  alert("Empdata "+" || "+Empdata);
        if (Emailid != undefined) {
            if (!(Emailid.match(regexemail))) {
                $("#erroremailid").html("Invalid Email-id");
                //  alert("inside match else");
                flag = true;
            }
        }
        else {
            flag = true;
            $("#erroremailid").html("This field is required.");

        }

        //name validation
        if (Name != undefined) {
            // alert("name = " + name);
            if (!(Name.match(regexname))) {
                flag = true;
                $("#errorname").html("Invalid name.");

            }
        }
        else {
            flag = true;
            $("#errorname").html("This field is required.");

        }

        // Designation Validation       
        if (Designation != undefined) {
            if (!(Designation.match(regdesignation))) {
                flag = true;
                $("#errordesignation").html("Text only.");

            }
        }
        else {
            flag = true;
            $("#errordesignation").html("This field is required.");

        }
        //department validation
        if (DeptId == undefined) {
            flag = true;
            $("#errordept").html("This field is required.");
        }

        //contactno validation
        if (ContactNo == undefined) {
            flag = true;
            $("#errorcontactno").html("This field is required.");

        }

        if (flag == true) {
            //   alert(flag);
            //$route.reload();
        }
        else {
            $scope.Empdata = { Name: Name, Designation: Designation, ContactNo: ContactNo, Emailid: Emailid, DepartmentID: DeptId };
            alert(JSON.stringify($scope.Empdata));

            eventData.saveEmployee($scope.Empdata).then(function () {
                alert("success");

            });
        }
    }


    //cancel add dept.
    $scope.AddCancel = function () {
        $route.reload();
    }
    //Edit view.
    $scope.UpdateEmployee = function () {

        //alert("edit122");
        var id = $route.current.params.Id;
        var name = $route.current.params.name;
        var DeptID;
    
            eventData.getAllDepartment().then(function (data) {         // Get all department for drop down list.
                // alert("success " + data);
                $scope.department = data;

                eventData.DetailEmp(id).then(function (data) {              //Get employee by id.
                    //   alert(data);
                    $scope.Empdata = data;
                    DeptID = ($scope.Empdata.DepartmentID) - 1;
                    $scope.DeptName = $scope.department[DeptID];
                })
            });
        }

    //Update Employee details.
    $scope.EditEmployee = function (Empdata, DeptName, Employe) {
        // alert("edit"+"\n"+JSON.stringify(Empdata));
        Id = Empdata.ID;
        //  alert(Id);
        //  Department = $scope.Department;
        Name = Empdata.Name;
        Designation = Empdata.Designation;
        ContactNo = Empdata.ContactNo;
        Emailid = Empdata.Emailid;
        DeptId = DeptName.ID;
        $("#errorname1").html("");
        $("#errordept1").html("");
        $("#erroremailid1").html("");
        $("#errorcontactno1").html("");
        $("#errordesignation1").html("");
      //  alert("deptid = "+DeptId+" || "+DeptName.ID)
        var regexemail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var regexname = /^[A-Z]+[a-zA-Z''-'\s]*$/;
        var regdesignation = /^[A-Za-z- ]+$/;
        var flag = false;
      //  alert(Name + " || " + Designation + " || " + ContactNo + " || " + Emailid + " || " + DeptId);
        if (Emailid != undefined) {
            if (!(Emailid.match(regexemail))) {
                $("#erroremailid1").html("Invalid Email-id");
                //  alert("inside match else");
                flag = true;
            }
        }
        else {
            flag = true;
            $("#erroremailid1").html("This field is required.");

        }

        //name validation
        if (Name != undefined) {
            // alert("name = " + name);
            if (!(Name.match(regexname))) {
                flag = true;
                $("#errorname1").html("Invalid name.");

            }
        }
        else {
            flag = true;
            $("#errorname1").html("This field is required.");

        }

        // Designation Validation       
        if (Designation != undefined) {
            if (!(Designation.match(regdesignation))) {
                flag = true;
                $("#errordesignation1").html("Text only.");

            }
        }
        else {
            flag = true;
            $("#errordesignation1").html("This field is required.");

        }
        //department validation
        if (DeptId == undefined) {
            flag = true;
            $("#errordept1").html("This field is required.");
        }

        //contactno validation
        if (ContactNo == undefined) {
            flag = true;
            $("#errorcontactno1").html("This field is required.");

        }

        if (flag == true) {
            //   alert(flag);
            //$route.reload();
        }
        else {

            $scope.Employee = { ID: Id, Name: Name, Designation: Designation, ContactNo: ContactNo, Emailid: Emailid, DepartmentID: DeptId };
            //  alert(JSON.stringify($scope.Employee));

            eventData.updateEmployee($scope.Employee).then(function () {
                //   alert("success = ");
                $("#msg").show().delay(3000).fadeOut();

            })
        }
    }

    //Delete employee.
    $scope.DeleteEmployee = function (name, id) {

        alert("delete  " + name + " || " + id);
        if (confirm("Are you sure that you want to delete details of " + name + " ?")) {
            eventData.deleteEmployee(id).then(function () {
                alert("success");
                window.location.hash = 'EmployeeList';

            });
        } else {
            window.location.hash = 'EmployeeList';
        }
    }

    $scope.UpdateCancel = function () {
        $route.reload();
    }
    //Details of employee
    $scope.EmployeeDetails = function () {
      //  alert("details");
        var id = $route.current.params.Id;
        var name = $route.current.params.name;

        eventData.DetailEmp(id).then(function (data) {     //get detail of employee.
          //  alert("success");
            $scope.Empdata = data;
            var DeptId = $scope.Empdata.DepartmentID;

            eventData.getDeptById(DeptId).then(function (data) {   //Get department of employee.
             //   alert(data + "\n" + JSON.stringify(data));
                $scope.DeptName = data;
            })
        });

    }

    $scope.BackToEmpList = function () {
        
        window.location.hash = "EmployeeList";
    }
}])

