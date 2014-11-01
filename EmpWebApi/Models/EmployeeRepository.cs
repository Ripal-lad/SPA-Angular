using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmpWebApi.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {

        //    public List<Department> department = new List<Department>();
            public List<Employee> employee = new List<Employee>();
            //  int _nextId = 1;


            private EmpContext db = new EmpContext();

            public IEnumerable<Employee> GetEmployee()
            {
                return db.Employee;
            }
            //public IEnumerable<Employee> GetAll()
            //{
            //    return db.Employee;
            //}


            public Employee Get(int id)
            {
                var emp = db.Employee.Find(id);
                //return employee.Find(p => p.ID == id);
                return emp;
            }

            public Employee Add(Employee item)
            {
                db.Employee.Add(item);
                db.SaveChanges();
                return item;
                // if (item == null)
                // {
                //     throw new ArgumentNullException("item");
                // }
                //item.ID =_nextId++;
                // employee.Add(item);
              
            }

            public void Remove(int id)
            {
                var emp= db.Employee.Find(id);
                db.Employee.Remove(emp);
                db.SaveChanges();
               // employee.RemoveAll(p => p.ID == id);
            }

            public bool Update(Employee employee)
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                //if (item == null)
                //{
                //    throw new ArgumentNullException("item");
                //}
                //int index = employee.FindIndex(p => p.ID == item.ID);
                //if (index == -1)
                //{
                //    return false;
                //}
                //employee.RemoveAt(index);
                //employee.Add(item);
                return true;
            }

            //public void Dispose()
            //{
            //    Dispose(true);
            //    GC.SuppressFinalize(this);
            //}
        
    }
}