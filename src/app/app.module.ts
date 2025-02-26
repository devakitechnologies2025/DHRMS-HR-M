import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { HeaderLeftpannelComponent } from './header-leftpannel/header-leftpannel.component';
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
import { RouterModule } from '@angular/router';
import { BgvheaderComponent } from './bgvheader/bgvheader.component';
import { EducationaldetailsComponent } from './educationaldetails/educationaldetails.component';
import { FilterComponent } from './filter/filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmploymentdetailsComponent } from './employmentdetails/employmentdetails.component';
import { BgvdashboardComponent } from './bgvdashboard/bgvdashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { BranchComponent } from './branch/branch.component';
import { BgvComponent } from './bgv/bgv.component';
import { BgvallemployeesComponent } from './bgvallemployees/bgvallemployees.component';
import { PayrollComponent } from './payroll/payroll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    NewuserComponent,
    AllDepartmentsComponent,
    HeaderLeftpannelComponent,
    SoftwareComponent,
    NonitComponent,
    BankingComponent,
    HospitalComponent,
    SchoolComponent,
    ProjectsComponent,
    AddnewprojectComponent,
    HolidaysComponent,
    MainpageComponent,
    ProfessionalinformationComponent,
    DocumentsComponent,
    AccountaccessComponent,
    BgvheaderComponent,
    EducationaldetailsComponent,
    FilterComponent,
    DashboardComponent,
    EmploymentdetailsComponent,
    JobsComponent,
    BranchComponent,
    BgvComponent,
    BgvallemployeesComponent,
    PayrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AddDepartmentComponent,
    RouterModule,
    PersonalinformationComponent,
    BgvdashboardComponent
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
