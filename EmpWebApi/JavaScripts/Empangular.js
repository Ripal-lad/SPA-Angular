
var app = angular.module("app", ['ngRoute', 'ngResource']);
//.service('$apply', function () { /* ... */ });//alert("hello");
 
var apiPaths = {

    deleteDepartment: "/api/department/deleteDepartment",
    updateDepartment: "/api/department/updateDepartment",
    deleteEmployee: "/api/employee/deleteEmployee",
    updateEmployee: "/api/employee/updateEmployee",
}
app.config(function ($routeProvider) {
   // alert("config");
    $routeProvider.when('/', {
        //controller: 'DeptController',
        templateUrl: '/Templates/Home/Index.html'
    })
    .when('/DepartmentList', {
       
        templateUrl: '/Templates/Department/Index1.html',
        controller: 'DepartmentController'
    })
    .when('/AddDepartment', {
        
        templateUrl: '/Templates/Department/Create1.html',
        controller: 'DepartmentController',
    })
     .when('/Details/:Id/:name', {

         templateUrl: '/Templates/Department/Details.html',
         controller: 'DepartmentController',
     })
    .when('/UpdateDepartment/:Id/:name', {

          templateUrl: '/Templates/Department/Edit.html',
          controller: 'DepartmentController',
      })
   
    //.when('/CancelAddDept', {
    ////    url: '/AddDepartment',
    //    controller: 'DeptController',
    //    templateUrl: '/Templates/Department/Create.html',
       
    //})
    //.when('/BackToDeptList', {
    //    controller: 'DeptController',
    //    templateUrl: '/Templates/Department/Index.html'
    // })

    .when('/EmployeeList', {

        templateUrl: '/Templates/Employee/Index.html',
        controller: 'EmployeeController'
    })
    .when('/AddEmployee', {

        templateUrl: '/Templates/Employee/Create.html',
        controller: 'EmployeeController'
    })
    .when('/UpdateEmployee/:Id/:name', {

        templateUrl: '/Templates/Employee/Edit.html',
        controller: 'EmployeeController',
    })

    .when('/EmployeeDetails/:Id/:name', {

        templateUrl: '/Templates/Employee/Details.html',
        controller: 'EmployeeController',
    })
   // .otherwise({redirectTo:'/'});
});





















//app.config(function ($routeProvider) {

//    $routeProvider.when('/Edit',
//        {
//            templateUrl: '/Template/Index.html/',
//            controller: 'mainController'
//        })
//  //  alert("config")
//});


//})