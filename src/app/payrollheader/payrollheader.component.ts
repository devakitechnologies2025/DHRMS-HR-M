import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-payrollheader',
  standalone: false,
  
  templateUrl: './payrollheader.component.html',
  styleUrl: './payrollheader.component.css'
})
export class PayrollheaderComponent {
 username = 'HR Nexus';
  activeButton: string = '';
  currentRoute: string = ''; // Display-friendly route name
  isMenuVisible = false;  // Tracks if logout menu is visible
  greeting: string = '';
  showGreetingAndIcon: boolean = true;

  setActiveButton(buttonName: string): void {
    this.activeButton = buttonName;
  }
 

  constructor(private router: Router) {}

  // Toggle the visibility of the logout menu
  toggleLogoutMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Handle logout and redirect to login page
  logout() {
   this.router.navigate(['/login']);
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
        const route = this.router.url; // Current route URL
        this.handleRouteChange(route);
      }
    });
  }
 
  handleRouteChange(route: string) {
    this.showGreetingAndIcon = false; // Default to hide hello and icon

    if (route === '/payrollmainpage/offerletter') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
  
    } else {
      this.showGreetingAndIcon = true;
      this.setGreeting(); // Set default greeting
    }
  }

}
