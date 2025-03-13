import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll',
  standalone: false,
  
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.css'
})
export class PayrollComponent {  
  showModal = true;
  selectedFlag: string = 'assets/flags/indiaflag.jpg';
  selectedCountryName: string = 'Select Country';
  dropdownOpen: boolean = false; // Tracks if dropdown is open

  constructor(private cdr: ChangeDetectorRef,private router: Router) {}


  countryList = [
    { name: 'Israel', flag: 'assets/flags/israelflag.jpg' },
    { name: 'India', flag: 'assets/flags/indiaflag.jpg' },
    { name: 'UK', flag: 'assets/flags/ukflag.jpg' },
    { name: 'Canada', flag: 'assets/flags/canadaflag.avif' },
    { name: 'China', flag: 'assets/flags/chinaflag.jpg' },
    { name: 'Indonesia', flag: 'assets/flags/Indonesiaflag.jpeg' },
    { name: 'Pakistan', flag: 'assets/flags/Pakistanflag.jpeg' },
    { name: 'Bangladesh', flag: 'assets/flags/Bangladeshflag.jpeg' },
    { name: 'Japan', flag: 'assets/flags/Japanflag.png' },
    { name: 'Philippines', flag: 'assets/flags/Philippinesflag.jpeg' },
    { name: 'Vietnam', flag: 'assets/flags/Vietnamflag.jpeg' },
  ];

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents dropdown from closing immediately
    this.dropdownOpen = !this.dropdownOpen;
    console.log("Dropdown Open:", this.dropdownOpen);
  }
  
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
  
    // Prevent closing if clicking inside the dropdown
    if (!targetElement.closest('.dropdown-container')) {
      console.log("Clicked outside, closing dropdown");
      this.dropdownOpen = false;
    } else {
      console.log("Clicked inside, keeping dropdown open");
    }
  }
  
  selectCountry(country: any) {
    this.selectedFlag = country.flag;
    this.selectedCountryName = country.name;
    
    setTimeout(() => {
      this.dropdownOpen = false; // Ensure dropdown closes after selection
    }, 0);
  }
  
  confirmSelection() {
    this.router.navigate(['/payroll-main']);  // Navigate to Payroll Main Page only
  }

  closeModal() {
    this.router.navigate(['/mainpage']);
  }
}