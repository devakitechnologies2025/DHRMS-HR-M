import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  standalone: false,
  
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  user = {
    name: '',
    mobile: '',
    email: '',
    empid: '',
    password: '',
    confirmPassword: ''
  };

  errorMessage: string = '';
  errorpass: string = '';

  constructor(private router: Router) {}

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  onSubmit() {
    // Validate if all fields are filled
    if (!this.user.name || !this.user.mobile || !this.user.email || !this.user.empid || !this.user.password || !this.user.confirmPassword) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    // Check if passwords match
    if (this.user.password !== this.user.confirmPassword) {
      this.errorpass = 'Passwords do not match.';
      return;
    }

    // If validation passes
    console.log('User created successfully', this.user);
    // alert('Account created successfully! Please log in.');
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility(fieldId: string): void {
    const inputField = document.getElementById(fieldId) as HTMLInputElement;
    if (inputField && inputField.type === 'password') {
      inputField.type = 'text';
    } else if (inputField) {
      inputField.type = 'password';
    }
  }
}
