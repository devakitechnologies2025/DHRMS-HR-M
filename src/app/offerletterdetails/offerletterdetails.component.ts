import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offerletterdetails',
  standalone: false,
  
  templateUrl: './offerletterdetails.component.html',
  styleUrl: './offerletterdetails.component.css'
})
export class OfferletterdetailsComponent {

  isEditMode: boolean = false;

  offerLetter = {
    joiningDate: '25/01/2025',
    employeeName: 'Praveen Sai',
    designation: 'UI/UX Designer',
    ctc: '2000000'
  };

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;

    if (!this.isEditMode) {
      console.log("Saved Data:", this.offerLetter);
    }
  }

  
  constructor(private router: Router) {}

  handleCancel() {
    // Redirect to Payroll Main Page
    this.router.navigate(['/payroll/offerletter']);
  }
}
