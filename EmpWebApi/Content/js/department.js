
function Task(data) {
    this.Department = ko.observable(data.DName);
    this.Id = ko.observable(data.ID);
    this.Name = ko.observable(data.Name);
    this.Designation = ko.observable(data.Designation);
    this.Emailid = ko.observable(data.Emailid);
    this.Contactno = ko.observable(data.ContactNo);
    this.EmployeeId = ko.observable(data.ID);
    this.Deptid = ko.observable(data.DepartmentID);
    this.EmpDetailUrl = ko.observable("#/EmployeeDetail/" + data.ID + "/" + data.Name);
    this.EmpDeleteUrl = ko.observable("#/DeleteEmployee/" + data.ID + "/" + data.Name);
    this.EmpupdateUrl = ko.observable("#/UpdateEmployeeDetail/0/" + data.ID + "/" + data.Name);
    this.DeptDetailUrl = ko.observable("#/DepartmentDetail/" + data.ID + "/" + data.DName);
    this.DeptDeletelUrl = ko.observable("#/DeleteDepartment/" + data.ID + "/" + data.DName);
    this.DeptUpdateUrl = ko.observable("#/UpdateDepartment/" + data.ID + "/" + data.DName);
    this.DeptCancelUpdate = ko.observable("#/CancelEdit/" + data.ID + "/" + data.DName);
   
}

function AppViewModel() {
    alert("hello");
   
    this.firstName = ko.observable("");
    this.DeptName = ko.observable("");  //Create
    this.DeptEdit = ko.observable(""); // Edit Name
    this.DepteditId = ko.observable("");// Edit Id
    this.DeptDetail = ko.observable("");//Detail
    this.Name = ko.observable("");
    this.Designation = ko.observable("");
    this.Emailid = ko.observable("");
    this.Contactno = ko.observable("");
    this.EmployeeId = ko.observable("");
    this.Department = ko.observable("");
    this.Deptid = ko.observable("");
    this.Id = ko.observable("");
    this.DeptCancelUpdate = ko.observable("");
   
    var self = this;
    self.tasks = ko.observableArray([]);
    self.dept = ko.observableArray([]);
    self.Selected = ko.observableArray([1]);
    self.departmentid = ko.observableArray([]);
    // Home page
   
     (function ($) {
        // alert("function");
         var app = $.sammy('#Home', function () {
             this.get('#/', function (context) {
                 //  alert("saamy emp")
                 //this.DepartmentDetail = function () {
                // alert("department");
                 $("#DeptIndex").show();
                 $("#divhome").hide();
                 $("#Deptcreate").hide();
                 $("#Deptupdate").hide();
                 $("#Deptdetail").hide();
                 $("#detailnotfound").hide();
                 $("#Deptnotfound").hide();
                 $("#EmpIndex").hide();
                 $("#Empcreate").hide();
                 $("#Empupdate").hide();
                 $("#Empdetail").hide();
                 $("#NoDptFound").hide();
                 $("#datanotfound").hide();
                 $.ajax({
                     type: 'GET',
                     url: "/api/department",
                     datatype: 'json',
                     success: function (data) {
                    //     alert(data);
                         //var d = JSON.stringify(data);
                         //alert(d);

                         if (data == 'Nodatafound') {
                             $("#Deptnotfound").show();
                             $("#DeptIndex").hide();
                         }
                         else {
                             $("#DeptIndex").show();
                             $("#Deptnotfound").hide();

                             var mappedTasks = $.map(data, function (item) {
                                 //  alert("item = "+item);
                                 return new Task(item);
                             });

                             self.tasks(mappedTasks);
                         }
                     },
                 });

             });
             // add department view
             this.get('#/AddDepartment/0', function (context) {
                 //self.AddDepartment = function () {
                 alert("add");
                 $("#divhome").hide();
                 $("#Deptcreate").show();
                 $("#DeptIndex").hide();
             });

             //add department into database.
             this.get('#/CreateDeparment/', function (context, data) {
                 //   self.CreateDepartment = function () {
                 // alert("create");

                 var DepartmentName = self.Department();
                 alert(DepartmentName);
                 $("#error").html("");
                 $("#error").show();
                 if (DepartmentName == "") {
                     $("#error").append("This field is required.");
                     window.location.hash = "#/AddDepartment/";
                 }
                 else {
                     //   alert("inside else : flag " + flag)
                     $.ajax({
                         type: 'Post',
                         url: "/api/department",
                         datatype: 'json',
                         data: { "DName": "" + DepartmentName + "" },
                         success: function (data) {
                             console.log("Success");
                             alert("added");
                             // alert(data.DName + " added successfully");
                             window.location.hash = "#/";


                         },
                         error: function (xhr, status, errorThrown) {

                             //   alert("error");
                             console.log("Sorry, there was a problem!");
                             console.log("Error: " + errorThrown);
                             console.log("Status: " + status);
                         },
                     });
                 }

             });


             //Department details
             this.get('#/DepartmentDetail/:id?/?:name?', function (context) {
                 context.log('Yo yo yo');
                  alert("hello");
                 $("#depttable").hide();
                 var id = context.params.id;
                 var name = context.params.name;
                 alert("hello" +id);
                     $("#DeptIndex").hide();
                     $("#divhome").hide();

                  
                             
                                 //$("#Deptdetail").show();
                                 $("#detailnotfound").hide();
                                 $("#Deptdetail").show();
                                 //  alert(data);
                            

             });


         });
     $(function () {
         app.run('#/');
     });


 })(jQuery);
    
}

         // Activates knockout.js
ko.applyBindings(new AppViewModel());
