import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isFocused = false;

  onFocus() {
    this.isFocused = true;
  }
  constructor(private router: Router) {

  }

  togglePasswordVisibility(fieldId: string): void {
    const inputField = document.getElementById(fieldId) as HTMLInputElement;
    if (inputField.type === 'password') {
      inputField.type = 'text';
    } else {
      inputField.type = 'password';
    }
  }
  validateCredentials(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email regex
    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.{10,})/; // Password regex: must be 10 chars long and contain at least one special character

    // Validate email format
    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Invalid email format';
      return;
    }

    // Validate password format
    if (!passwordPattern.test(this.password)) {
      this.errorMessage = 'Password must be at least 10 characters and contain a special character';
      return;
    }

    // Check if email and password match
    if (this.email === 'test@example.com' && this.password === 'Test@12345') {
      this.router.navigate(['/header']);
    } else {
      this.errorMessage = 'Incorrect email or password';
    }
  }

}
