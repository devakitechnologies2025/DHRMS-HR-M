import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bgv',
  standalone: false,
  
  templateUrl: './bgv.component.html',
  styleUrl: './bgv.component.css'
})
export class BgvComponent {
  showForm: any;
  
  constructor(private router: Router) { }
  handleNext() {
    this.router.navigate(['/bgvheader/educationaldetails']); // Redirect to Educational Details
  }

  handleCancel() {
    window.history.back();
  }
}
