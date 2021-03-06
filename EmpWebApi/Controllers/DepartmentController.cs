﻿using EmpWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpWebApi.Controllers
{
    public class DepartmentController : ApiController
    {
       // static readonly IEmpRepository repository = new IEmpRepository();
         IDepartmentRepository _repository = new EmpRepository();

      
        [Route("api/department/deleteDepartment/{id?}")]
        [HttpPost]
        public void deleteDepartment(int id)
        {
            //Department item = _repository.Get(id);
            //if (item == null)
            //{
            //    throw new HttpResponseException(HttpStatusCode.NotFound);
            //}

            _repository.Remove(id);
        }
        public IEnumerable<Department> Get()
        {
            return _repository.GetAll();
        }
        //public IEnumerable<Employee> GetEmp()
        //{
        //    return _repository.GetEmployee();
        //}

        //public IHttpActionResult GetAll(int id)
        //{
        //    var product = _repository.Get(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(product);
        //}


        //Add department.
        public HttpResponseMessage PostDepartment(Department item)
        {
            item = _repository.Add(item);
            var response = Request.CreateResponse<Department>(HttpStatusCode.Created, item);

            //string uri = Url.Link("DefaultApi", new { id = item.ID });
            //response.Headers.Location = new Uri(uri);
            return response;
        }

        //Update department
        // [Route("api/department/{id:int}")]
        //[HttpPut]
        [Route("api/department/updateDepartment")]
        [HttpPost]
        public void Department(Department department)
        {
          //  dept.ID = id;
            if (!_repository.Update(department))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public IHttpActionResult GetDepartment(int id)
        {
           Department item = _repository.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
      
    }
}
