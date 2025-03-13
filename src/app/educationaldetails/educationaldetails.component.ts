import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educationaldetails',
  standalone: false,
  
  templateUrl: './educationaldetails.component.html',
  styleUrl: './educationaldetails.component.css'
})
export class EducationaldetailsComponent {
  education = {
    qualification: '',
    specialization: '',
    institution: '',
    university: '',
    enrolment: '',
    period: '',
    graduated: '',
    course: ''
  };
showForm: any;
  constructor(private router: Router) {}

  // Redirect to BGV Header Page on Cancel
  handleCancel() {
    this.router.navigate(['/bgvheader']);
  }

  // Redirect to Employment Details Page on Next
  handleNext() {
    this.router.navigate(['/bgvheader/employmentdetails']);
  }
}
