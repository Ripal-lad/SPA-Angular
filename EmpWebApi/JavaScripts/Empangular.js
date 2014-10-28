
var app = angular.module("app", ['ngRoute']);
//.service('$apply', function () { /* ... */ });//alert("hello");


var apiPaths = {

    deleteDepartment: "api/department/deleteDepartment",

}


app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        //controller: 'DeptController',
        templateUrl: '/Templates/Home/Index.html'
    })
    .when('/DepartmentList', {
       
        templateUrl: '/Templates/Department/Index1.html',
        controller: 'DeptController'
    })
    .when('/AddDepartment', {
        
        templateUrl: '/Templates/Department/Create1.html',
        controller: 'DeptController',
    })
     .when('/Details/:Id/:name', {

         templateUrl: '/Templates/Department/Details.html',
         controller: 'DeptController',
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
    .otherwise({redirectTo:'/'});
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