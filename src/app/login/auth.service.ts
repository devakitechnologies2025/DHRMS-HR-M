import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: boolean = false;

  constructor() {}

  login() {
    this.loggedInStatus = true;
    localStorage.setItem('loggedIn', 'true'); // Store the login status in localStorage
  }

  logout() {
    this.loggedInStatus = false;
    localStorage.removeItem('loggedIn'); // Remove the login status on logout
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true'; // Check login status from localStorage
  }
}
