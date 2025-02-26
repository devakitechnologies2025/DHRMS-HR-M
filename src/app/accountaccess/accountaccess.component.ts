import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountaccess',
  standalone: false,
  
  templateUrl: './accountaccess.component.html',
  styleUrl: './accountaccess.component.css'
})
export class AccountaccessComponent {
  employeeData = {
    teamsId: '',
    skypeId: '',
    githubId: '',
    email: '',
    taghr: '',
    reportingmanager: '',
    assignproject: '',
  };

  activeFormId: string = 'account-access';

   // Method to handle navigation and form switching
   showForm(formId: string): void {
    this.activeFormId = formId;
  }

  save() {
    console.log('Employee Data:', this.employeeData);
  }
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/header/documents']);
  }
}

