app.factory('eventData', function ($resource) {
   // alert("eventdata");
    return {

        //Employee List
        getEmployee: function () {
            return $resource('/api/employee/').query().$promise;
        },

        //Add new employee.
        saveEmployee: function (Empdata) {
           /// alert(Empdata);
            return $resource('/api/employee/').save(Empdata).$promise;
        },

        //Update employee detail.
        updateEmployee: function (Employee) {
            //alert("empdata" + "\n" + JSON.stringify(Employee)+" || "+Employee.ID+" || "+Employee.Name);
           // return $resource('api/employee/:Id', { Id: "@Id" }, { update: { method: "PUT", data: { Employee: "@Employee" } } })
            return $resource(apiPaths.updateEmployee).save(Employee).$promise;
        },

        //Details of employee.
        DetailEmp: function (id) {
            return $resource("/api/employee/:id", { id: "@id" }).get({ id: id }).$promise;
        },

        //Get department by id.
        getDeptById: function (id) {
            return $resource("/api/department/:id", { id: "@id" }).get({ id: id }).$promise;
        },

        //Get all department.
        getAllDepartment: function () {
            return $resource("/api/department/").query().$promise;
        },
       
        //Delete employee.
        deleteEmployee: function (id) {
           // alert("delete " + "id = " + id);
            //  return $resource('/api/department/:id', { id: '@id' },{delete_user: {method: 'DELETE', params: {}}});
            return $resource(apiPaths.deleteEmployee + "/:id", { id: "@id" }).save({ id: id }).$promise;

        }

    };
});

app.factory('departmentData', function ($resource) {
    // alert("departmentData");
    return {

        //Department List
        getDepartment: function () {
            return $resource('/api/department/').query().$promise;
        },

       // save department.
        saveDepartment: function (DeptName) {
            //alert("save = "+DeptName+" || "+JSON.stringify(DeptName));
            return $resource('/api/department/').save(DeptName).$promise;
        },

        //Get all employees.
        getEmployee: function () {
            return $resource('/api/employee/').query().$promise;
        },

        updateDepartment: function (department) {
         ///   alert(" updateDepartment " + " || " + department.ID + " || " + department.DName);
            //   return $resource('api/department/:Id', { Id: "@Id" }, { update: { method: "PUT", data: { department: "@department" } } })
            return $resource(apiPaths.updateDepartment).save(department).$promise;
        },

        deleteDepartment: function (id) {
          //  alert("delete "+"id = "+id);
            //  return $resource('/api/department/:id', { id: '@id' },{delete_user: {method: 'DELETE', params: {}}});
             return $resource(apiPaths.deleteDepartment + "/:id", { id: "@id" }).save({ id: id }).$promise;
        
        }


    }
    })