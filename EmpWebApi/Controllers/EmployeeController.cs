using EmpWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpWebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        IEmployeeRepository _repository = new EmployeeRepository();

        //Return all employees.
        public IEnumerable<Employee> Get()
        {
            return _repository.GetEmployee();
        }

        //Return Employee by Id.
        public IHttpActionResult GetAll(int id)
        {
            var employee = _repository.Get(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        //Save Employee.
        public HttpResponseMessage PostEmployee(Employee item)
        {
            item = _repository.Add(item);
            var response = Request.CreateResponse<Employee>(HttpStatusCode.Created, item);

            //string uri = Url.Link("DefaultApi", new { id = item.ID });
            //response.Headers.Location = new Uri(uri);
            return response;
        }

        [Route("api/employee/updateEmployee")]
        [HttpPost]
        public void Employee(Employee employee)
        {
            //  dept.ID = id;
            if (!_repository.Update(employee))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }
      
        public void PutEmployee(int id,Employee emp)
        {
            emp.ID = id;
            if (!_repository.Update(emp))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        //delete employee.
        [Route("api/employee/deleteEmployee/{id?}")]
        [HttpPost]
        public void deleteEmployee(int id)
        {
            //Department item = _repository.Get(id);
            //if (item == null)
            //{
            //    throw new HttpResponseException(HttpStatusCode.NotFound);
            //}

            _repository.Remove(id);
        }
    }
}
