import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: false,
  
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  documentData = {
    appointmentLetter: null as File | null,
    salarySlips: null as File | null,
    relievingLetter: null as File | null,
    experienceLetter: null as File | null
  };
 
    constructor(private router: Router) {}
 
    goToNextSection() {
      this.router.navigate(['/header/accountaccess']);  
    }
    cancel() {
      this.router.navigate(['/header/professional-info']);
    }
}
