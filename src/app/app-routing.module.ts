import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '',component : HomeComponent},
  {path: 'employees',component : EmployeeComponent},
  {path : 'add-employee',component : AddEmployeeComponent},
  {path : 'edit-employee', component : EditEmployeeComponent},
  {path : 'not-found',component : NotFoundComponent},
  {path:'**',redirectTo :'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
