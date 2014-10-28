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

        public IEnumerable<Employee> Get()
        {
            return _repository.GetEmployee();
        }

        public IHttpActionResult GetAll(int id)
        {
            var employee = _repository.Get(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
    }
}
