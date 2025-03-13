import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  validateCredentials(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.{10,})/;

    if (!emailPattern.test(this.email)) {
      this.errorMessage = 'Invalid email format';
      return;
    }

    if (!passwordPattern.test(this.password)) {
      this.errorMessage = 'Password must be at least 10 characters and contain a special character';
      return;
    }

    if (this.email === 'test@example.com' && this.password === 'Test@12345') {
      this.authService.login();
      this.router.navigate(['/mainpage']);
      history.pushState(null, '', location.href);
      window.onpopstate = function () {
        history.go(1);
      };
    } else {
      this.errorMessage = 'Incorrect email or password';
    }
  }
}