import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NewuserComponent } from './newuser/newuser.component';

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
import { MainpageComponent } from './mainpage/mainpage.component';

import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { ProfessionalinformationComponent } from './professionalinformation/professionalinformation.component';
import { DocumentsComponent } from './documents/documents.component';
import { AccountaccessComponent } from './accountaccess/accountaccess.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { BgvheaderComponent } from './bgvheader/bgvheader.component';
import { EducationaldetailsComponent } from './educationaldetails/educationaldetails.component';
import { FilterComponent } from './filter/filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmploymentdetailsComponent } from './employmentdetails/employmentdetails.component';
import { JobsComponent } from './jobs/jobs.component';
import { BranchComponent } from './branch/branch.component';
import { BgvComponent } from './bgv/bgv.component';
import { BgvdashboardComponent } from './bgvdashboard/bgvdashboard.component';
import { BgvallemployeesComponent } from './bgvallemployees/bgvallemployees.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgetpasswordComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'newuser', component: NewuserComponent },
  { 
    path: 'bgvheader', 
    component: BgvheaderComponent,
    children: [
      { path: '', redirectTo: 'bgvdashboard', pathMatch: 'full' },  
      { path: 'bgvdashboard', component: BgvdashboardComponent },
      { path: 'bgvallemployees', component: BgvallemployeesComponent},
      { path: 'bgv', component: BgvComponent } ,
    ]
  },
  {
    path: 'header',
    component: HeaderLeftpannelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path: 'allemp',component: AllemployeesComponent},
      { path: 'filter', component: FilterComponent},
      { path: 'personal-info', component: PersonalinformationComponent },  
      { path: 'professional-info', component: ProfessionalinformationComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'accountaccess', component: AccountaccessComponent },
      { path: 'all-departments', component: AllDepartmentsComponent },
      { path: 'software', component: SoftwareComponent },
      { path: 'NON-IT', component: NonitComponent },
      { path: 'banking', component: BankingComponent },
      { path: 'hospital', component: HospitalComponent },
      { path: 'school', component: SchoolComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'addnewproject', component: AddnewprojectComponent },
      { path: 'holidays', component: HolidaysComponent }, 
      { path: 'educationaldetails', component: EducationaldetailsComponent},
      { path: 'employmentdetails', component: EmploymentdetailsComponent},
      { path: 'jobs', component:JobsComponent},
      { path: 'branch', component: BranchComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
