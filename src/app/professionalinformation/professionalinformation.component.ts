import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professionalinformation',
  standalone: false,
  
  templateUrl: './professionalinformation.component.html',
  styleUrl: './professionalinformation.component.css'
})
export class ProfessionalinformationComponent {
  professionalData = {
    employeeId: '',
    username: '',
    employeeType: '',
    email: '',
    department: '',
    designation: '',
    workingDays: '',
    joiningDate: '',
    officeLocation: ''
  };
 
 
 
  private clickCount = 0;
 
  constructor(private router: Router) {}
 
  goToNextSection() {
    this.router.navigate(['/header/documents']);  
  }
  
  cancel() {
    this.router.navigate(['/header/personal-info']);
  }
}
