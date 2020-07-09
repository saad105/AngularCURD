import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../model/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: EmployeeModel;
  editForm: FormGroup;
  showForm: boolean = false;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem('empData'));

    this.editForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_salary: ['', Validators.required],
      profile_image:[]
    });
    this.editForm.setValue(this.employee);
    this.showForm = true;
  }

  onSubmit() {
    this.apiService.editData(this.editForm.value)
    .subscribe(data =>{
      if(data.status == "success"){
        alert('Employee updated successfully.');
      }
      else{
        alert('Failed to update the data');
      }
      this.router.navigate(['employees']);
    })
    console.log(this.editForm.value);
  }
}
