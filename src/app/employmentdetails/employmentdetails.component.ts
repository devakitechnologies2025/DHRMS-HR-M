import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employmentdetails',
  standalone: false,
  
  templateUrl: './employmentdetails.component.html',
  styleUrl: './employmentdetails.component.css'
})
export class EmploymentdetailsComponent {
  isFresher: boolean = false;
  isExperienced: boolean = false;
  employmentList: any[] = [
    {
      companyName: '',
      address: '',
      city: '',
      postalCode: '',
      state: '',
      phone: '',
      website: '',
      designation: '',
      department: '',
      supervisor: '',
      salary: '',
      employeeId: '',
      joiningDate: '',
      exitDate: '',
      reasonForLeaving: '',
      employmentType: '',
      natureOfEmployment: ''
    }
  ];

  constructor(private router: Router) {}

  showForm:any;

  // Add new employment entry
  addEmployment() {
    this.employmentList.push({
      companyName: '',
      address: '',
      city: '',
      postalCode: '',
      state: '',
      phone: '',
      website: '',
      designation: '',
      department: '',
      supervisor: '',
      salary: '',
      employeeId: '',
      joiningDate: '',
      exitDate: '',
      reasonForLeaving: '',
      employmentType: '',
      natureOfEmployment: ''
    });
  }

  // Handle Cancel button
  handleCancel() {
    this.router.navigate(['/bgvheader/educationaldetails']);
  }

  // Handle Save button
  handleSave() {
    console.log('Employment details saved:', this.employmentList);
  }

}
