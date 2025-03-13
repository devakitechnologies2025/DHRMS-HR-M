import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: false,
  
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  username = 'Ameer';
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
    this.showGreetingAndIcon = false;

    const routeMap: { [key: string]: { name: string; greeting: string } } = {
      '/header/all-departments': { name: 'All Departments', greeting: '' },
      '/header/allemp': { name: 'All Employees - Employees', greeting: 'Employee' },
      '/header/software': { name: 'All Department - Software', greeting: 'Software' },
      '/header/NON-IT': { name: 'All Department - NON-IT', greeting: 'NON-IT' },
      '/header/banking': { name: 'All Department - Banks', greeting: 'Banking' },
      '/header/hospital': { name: 'All Department - Hospital', greeting: 'Hospital' },
      '/header/school': { name: 'All Department - School', greeting: 'School' },
      '/header/projects': { name: 'All Projects', greeting: 'All Projects Information' },
      '/header/holidays': { name: 'Holidays', greeting: 'Show All Holidays' },
      '/header/addnewproject': { name: 'All Projects', greeting: 'Add New Project Information' },
      '/header/branch': { name: 'Branch', greeting: 'All Branch Information' },
    };

    if (routeMap[route]) {
      this.currentRoute = routeMap[route].name;
      this.greeting = routeMap[route].greeting;
    } else {
      this.showGreetingAndIcon = true;
      this.setGreeting();
    }
  }
}

