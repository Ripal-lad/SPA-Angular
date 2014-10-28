using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmpWebApi.Models
{
    interface IEmployeeRepository
    {
      //  IEnumerable<Department> GetAll();
        IEnumerable<Employee> GetEmployee();
        Employee Get(int id);
        Employee Add(Employee item);
        void Remove(int id);
        bool Update(Employee item);
    }
}
