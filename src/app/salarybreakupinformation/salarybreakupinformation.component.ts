import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salarybreakupinformation',
  standalone: false,
  
  templateUrl: './salarybreakupinformation.component.html',
  styleUrl: './salarybreakupinformation.component.css'
})
export class SalarybreakupinformationComponent {

  salaryData: any = {};

  constructor(private router: Router) {}

  save() {
    localStorage.setItem('salaryData', JSON.stringify(this.salaryData)); // Store data
    this.router.navigate(['/payroll/salary-breakup-details']); // Redirect to details page
  }

  handleCancel(): void {
    this.router.navigate(['/payroll-main']); // Change '/payroll' to your actual Payroll main page route
  }

}
