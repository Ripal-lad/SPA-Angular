using System;
using System.Collections.Generic;
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
                return employee.Find(p => p.ID == id);
            }

            public Employee Add(Employee item)
            {
                db.Employee.Add(item);
                db.SaveChanges();
                // if (item == null)
                // {
                //     throw new ArgumentNullException("item");
                // }
                //item.ID =_nextId++;
                // employee.Add(item);
                return item;
            }

            public void Remove(int id)
            {
                employee.RemoveAll(p => p.ID == id);
            }

            public bool Update(Employee item)
            {
                if (item == null)
                {
                    throw new ArgumentNullException("item");
                }
                int index = employee.FindIndex(p => p.ID == item.ID);
                if (index == -1)
                {
                    return false;
                }
                employee.RemoveAt(index);
                employee.Add(item);
                return true;
            }

            //public void Dispose()
            //{
            //    Dispose(true);
            //    GC.SuppressFinalize(this);
            //}
        
    }
}