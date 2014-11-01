using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using EmpWebApi.Models;

namespace EmpWebApi.Models
{
   
        public class EmpContext : DbContext
        {
            public EmpContext()
                : base("name=EmpContext")
            {
            }
            public DbSet<Department> Department { get; set; }
            public DbSet<Employee> Employee { get; set; }
        }

        public class EmpRepository: IDepartmentRepository
        {
            public List<Department> department = new List<Department>();
          //  public List<Employee> employee = new List<Employee>();
          //  int _nextId = 1;

            private EmpContext db = new EmpContext();

            //public IEnumerable<Employee> GetEmployee()
            //{
            //    return db.Employee;
            ////}
            //public EmpRepository(private $resource: ng.resource.IResourceService){
            //  this.updateSelectedProject = $resource(apiPaths.updateProject); 
            //}
            public IEnumerable<Department> GetAll()
            {
                return db.Department;
             }

          
            public Department Get(int id)
        {
            var department = db.Department.Find(id);
            return department;
            //return department.Find(p => p.ID == id);
        }

            public Department Add(Department item)
        {
            db.Department.Add(item);
            db.SaveChanges();
           // if (item == null)
           // {
           //     throw new ArgumentNullException("item");
           // }
           //item.ID =_nextId++;
           // department.Add(item);
           return item;
        }

        public void Remove(int id)
        {
            var dept = db.Department.Find(id);
            db.Department.Remove(dept);
            db.SaveChanges();
         //   department.RemoveAll(p => p.ID == id);
        }

        public bool Update(Department department)
        {

            db.Entry(department).State = EntityState.Modified;
            db.SaveChanges();

            //if (item == null)
            //{
            //    throw new ArgumentNullException("item");
            //}
            //int index = department.FindIndex(p => p.ID == item.ID);
            //if (index == -1)
            //{
            //    return false;
            //}
            //department.RemoveAt(index);
            //department.Add(item);
            return true;
        }

          
        }
    
    }
