import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_salary: ['', Validators.required],
      profile_image:[]
    });
  }

  onSubmit() {
   this.apiService.addData(this.addForm.value)
   .subscribe(data =>{
     if(data.status == "success"){
       alert("Employee Added sucessfully");
     }
     else{
       alert("Failed to add data")
     }
     this.router.navigate(['employees']);
   })
   
  }
}
