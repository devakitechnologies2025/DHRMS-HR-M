import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboarComponent } from './dashboar/dashboar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    NewuserComponent,
    DashboarComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AddDepartmentComponent
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
