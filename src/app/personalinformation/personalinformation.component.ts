import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinformation',
  standalone: true,
  
  templateUrl: './personalinformation.component.html',
  styleUrl: './personalinformation.component.css'
})
export class PersonalinformationComponent {

  activeSection: string = 'personal-info'; // Default section

  constructor(private router: Router) {}

  showForm(section: string) {
    this.activeSection = section;
  }

  goToNextSection() {
    this.router.navigate(['/header/professional-info']);  // Navigate to Professional Information page
  }
 
  cancel() {
    this.router.navigate(['/header/allemp']);
  }
 
}