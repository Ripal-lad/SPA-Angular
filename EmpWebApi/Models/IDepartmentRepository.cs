using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmpWebApi.Models
{
    interface IDepartmentRepository
    {
        IEnumerable<Department> GetAll();
        //IEnumerable<Employee> GetEmployee();
        Department Get(int id);
        Department Add(Department item);
        void Remove(int id);
        bool Update(Department item);
    }
}
