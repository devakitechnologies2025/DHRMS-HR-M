import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bgvheader',
  standalone: false,

  templateUrl: './bgvheader.component.html',
  styleUrl: './bgvheader.component.css'
})
export class BgvheaderComponent {


  username = 'Ameer';
  activeButton: string = 'bgvdashboard'; // Set default active button to BGV
  currentRoute: string = ''; // Display-friendly route name
  isMenuVisible = false;  // Tracks if logout menu is visible
  greeting: string = '';
  showGreetingAndIcon: boolean = true;
  isBGVPage: boolean = false;

  constructor(private router: Router) { }

  setActiveButton(buttonName: string): void {
    this.activeButton = buttonName;
  }

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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isBGVPage = event.url.includes('/bgv');
      }
    });
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url; // Current route URL
        this.handleRouteChange(route);
      }
    });
  }

  handleRouteChange(route: string) {
    this.showGreetingAndIcon = false; // Default to hide hello and icon

    if (route === '/bgvheader/bgv') {
      this.currentRoute = 'BGV';
      this.greeting = 'All Employees Information';
    } else if (route === '/bgvheader/settings') {
      this.currentRoute = 'All Employees - Add New Employee';
      this.greeting = 'Settings';
    } else {
      this.showGreetingAndIcon = true;
      this.setGreeting(); // Set default greeting
    }
  }
}
