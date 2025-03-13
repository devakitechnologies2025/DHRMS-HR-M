import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offerletter',
  standalone: false,
  
  templateUrl: './offerletter.component.html',
  styleUrl: './offerletter.component.css'
})
export class OfferletterComponent {
  offerletter = {
    date: '',
    employeename: '',
    designation: '',
    ctc: ''
};


constructor(private router: Router) {}

handleCancel() {
  window.history.back();
}

save() {
  if (this.offerletter.employeename && this.offerletter.designation && this.offerletter.ctc) {
    // Perform any save logic if needed
    console.log("Offer Letter Data:", this.offerletter);

    // Redirect to OfferLetterDetails component
    this.router.navigate(['/payroll/offerletterdetails']);
  }
}


}