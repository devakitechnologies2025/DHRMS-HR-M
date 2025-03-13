import { Component } from '@angular/core';

@Component({
  selector: 'app-holidays',
  standalone: false,
  
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent {
  holidays :any[]= [
    { date: 'January 01, 2024', day: 'Tuesday', name: 'New Year' },
    { date: 'January 07, 2024', day: 'Saturday', name: "International Programmers' Day" },
    { date: 'February 04, 2024', day: 'Saturday', name: 'World Cancer Day' },
    { date: 'April 01, 2024', day: 'Saturday', name: 'April Fool Day' },
    { date: 'May 07, 2024', day: 'Monday', name: "International Programmers' Day" },
    { date: 'May 22, 2025', day: 'Tuesday', name: 'International Day for Biological Diversity' },
    { date: 'June 05, 2025', day: 'Monday', name: 'International Day for Biological Diversity' },
    { date: 'August 07, 2025', day: 'Monday', name: 'International Friendship Day' },
    { date: 'September 15, 2025', day: 'Friday', name: 'International Day of Democracy' },
    { date: 'November 14, 2025', day: 'Tuesday', name: 'World Diabetes Day' },
    { date: 'December 25, 2025', day: 'Monday', name: 'Merry Christmas' },
 
   
  ];
 
 
  isPastHoliday(date: string): boolean {
    const holidayDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of the day
  return holidayDate < today;
  }
 
 
  showAddHolidayForm = false;  // Controls modal visibility
  holidayDate: string = '';
 
  openAddHolidayForm() {
    this.showAddHolidayForm = true;
   
  }
 
  closeAddHolidayForm() {
    this.showAddHolidayForm = false;
    this.holidayDate = '';
  }
}
