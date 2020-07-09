import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee';
import { Subject } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: EmployeeModel[];
  options: any;
  employeeId : number
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  constructor(public apiService: ApiService,public router: Router) { }

  ngOnInit(): void {
    const scope = this;
    function deleteEmployee(id : number){
      this.employeeId = id;
    }

    this.options = {
      baseUrl: 'http://dummy.restapiexample.com/api/v1/',
      Get: 'employees',
      edit: 'update/:id',
      add: "create",
      delete: "delete/",
      dataTableOptions: {
        columns: [
          { title: "Id", data: "id", format: "number",visible: false },
          { title: "Name", data: "employee_name", class: "text-center", format: "text" },
          { title: "Age", data: "employee_age", class: "text-center", format: "number" },
          { title: "Salary", data: "employee_salary", class: "text-center", format: "amount" }
        ]
      },
      events: {
        edited: function () { },
        added: function () { },
        deleted: function () { },
      }
    };

    //  function editEmployee(data:EmployeeModel) {
    //    scope.apiService.getData
    //   localStorage.removeItem('empData');
    //   localStorage.setItem('empData', JSON.stringify(data));
    //   this.router.navigate(['edit-employee']);
    // }
   
  }
 
  // addemployee(){
  //   this.router.navigate(['add-employee']);
  // }
}


