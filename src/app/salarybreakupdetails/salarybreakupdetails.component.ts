import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salarybreakupdetails',
  standalone: false,
  
  templateUrl: './salarybreakupdetails.component.html',
  styleUrl: './salarybreakupdetails.component.css'
})
export class SalarybreakupdetailsComponent implements OnInit {
 
  salaryData={
    basicPay:'80000',
    hra:'40000',
    conveyance:'20000',
    entertainment:'12000',
    medical:'15000',
    shift:'12000',
    special:'10000'
  }
  
  isEditing: boolean = false;

  ngOnInit(): void {
    try {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('salaryData');
            if (savedData) {
                this.salaryData = JSON.parse(savedData);
            }
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
}


  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    localStorage.setItem('salaryData', JSON.stringify(this.salaryData));
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
    this.ngOnInit();
  }
}