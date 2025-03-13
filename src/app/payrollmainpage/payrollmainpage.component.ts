import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-payrollmainpage',
  standalone: false,
  
  templateUrl: './payrollmainpage.component.html',
  styleUrl: './payrollmainpage.component.css'
})
export class PayrollmainpageComponent {
 username = 'HR Nexus';
  activeButton: string = '';
  currentRoute: string = ''; // Display-friendly route name
  isMenuVisible = false;  // Tracks if logout menu is visible
  greeting: string = '';
  showGreetingAndIcon: boolean = true;

  constructor(private router: Router) {}

  // Toggle the visibility of the logout menu
  toggleLogoutMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Handle logout and redirect to login page
  logout() {
    this.router.navigate(['/login']);
    console.log("Logging out...");
  }

  ngOnInit() {
    this.setGreeting();
    this.updateRoute();
  }

  setGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (currentHour < 16) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }

  updateRoute() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange(this.router.url);
      }
    });
  }

  handleRouteChange(route: string) {
    this.showGreetingAndIcon = false; // Default to hide hello and icon

    if (route === '/payroll/payrollheader/offerletter') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
    } else if (route === '/bgvheader/bgv') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
    } else if (route === '/bgvheader/educationaldetails') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
    } else if (route === '/bgvheader/employmentdetails') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
    } else {
      this.showGreetingAndIcon = true;
      this.setGreeting(); // Set default greeting
    }
  }
}



