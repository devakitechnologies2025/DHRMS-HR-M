import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'


@Component({
  selector: 'app-header-leftpannel',
  standalone: false,
  
  templateUrl: './header-leftpannel.component.html',
  styleUrl: './header-leftpannel.component.css'
})
export class HeaderLeftpannelComponent {
  username = 'Ameer';
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url; // Current route URL
        this.handleRouteChange(route);
      }
    });
  }
 
  handleRouteChange(route: string) {
    // Reset currentRoute and greeting by default
    
    this.showGreetingAndIcon = false; // Default to hide hello and icon
    
    if (route === '/header/all-departments') {
      this.currentRoute = 'All Departments';
      this.greeting = ''; // No additional greeting
    } else if (route === '/header/software') {
      this.currentRoute = 'All Department - Software';
      this.greeting = 'Software';
    } else if (route === '/header/NON-IT') {
      this.currentRoute = 'All Department - NON-IT';
      this.greeting = 'NON-IT';
    } else if (route === '/header/banking') {
      this.currentRoute = 'All Department - Banks';
      this.greeting = 'Banking';
    } else if (route === '/header/hospital') {
      this.currentRoute = 'All Department - Hospital';
      this.greeting = 'Hospital';
    } else if (route === '/header/school') {
      this.currentRoute = 'All Department - School';
      this.greeting = 'School';
    } else {
      // Handle other cases (like /header/dashboard)
      this.showGreetingAndIcon = true;
      this.setGreeting(); // Set default greeting
    }
  }
  
  // capitalize(word: string): string {
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // }
}
