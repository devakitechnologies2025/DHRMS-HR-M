import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AddDepartService } from '../add-depart.service';

@Component({
  selector: 'app-addnewproject',
  standalone: false,
  
  templateUrl: './addnewproject.component.html',
  styleUrl: './addnewproject.component.css'
})
export class AddnewprojectComponent {
  clientDetails = {
    projectName: '',
    client: '',
    country: '',
    state: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
    zipcode: '',
  };

  budgetDetails = {
    amount: '',
    perHour: '',
    startDate: '',
    endDate: '',
  };

  assignedProject = {
    manager: '',
    hr: '',
  };

  

  currentSection: string = 'client'; // Track the current section (client, budget, assign)

  constructor(private router: Router, private location: Location,) {}

  goToNextSection() {
    if (this.currentSection === 'client') {
      this.currentSection = 'budget';
    } else if (this.currentSection === 'budget') {
      this.currentSection = 'assign';
    }
  }

  saveProject() {
    const projectData = {
      client: this.clientDetails,
      budget: this.budgetDetails,
      assignedProject: this.assignedProject,
    };

    
    console.log('Project saved:', projectData);
    this.router.navigate(['header/projects']);
  }

  cancel() {
    if (this.currentSection === 'client') {
      this.router.navigate(['header/projects']);
    } else if (this.currentSection === 'budget') {
      this.currentSection = 'client';
    }
    else if (this.currentSection === 'assign') {
      this.currentSection = 'budget';
    }
   
  }

}
