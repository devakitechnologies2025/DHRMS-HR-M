import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NewuserComponent } from './newuser/newuser.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { HeaderLeftpannelComponent } from './header-leftpannel/header-leftpannel.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { SoftwareComponent } from './software/software.component';
import { NonitComponent } from './nonit/nonit.component';
import { BankingComponent } from './banking/banking.component';
import { HospitalComponent } from './hospital/hospital.component';
import { SchoolComponent } from './school/school.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddnewprojectComponent } from './addnewproject/addnewproject.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgetpasswordComponent },
  {path:'newuser', component:NewuserComponent},
  {
    path: 'header',
    component: HeaderLeftpannelComponent,
    children: [
      { path: 'dashboard', component:DashboarComponent },
      {path:'all-departments',component:AllDepartmentsComponent},
      {path:'software',component:SoftwareComponent},
      {path:'NON-IT',component:NonitComponent},
      {path:'banking',component:BankingComponent},
      {path:'hospital',component:HospitalComponent},
      {path:'school',component:SchoolComponent},
      {path:'add-department',component:AddDepartmentComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'addnewproject',component:AddnewprojectComponent},
      {path:'holidays',component:HolidaysComponent},
      {path:'branch',component:BranchComponent},
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
