import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: false,
  
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: any[] = [
    { title: 'UI/UX Designer', category: 'Design', tags: ['Design', 'Full Time', 'Remote'], location: 'California, USA', salary: 3600, status: 'active' },
    { title: 'Sr. UX Researcher', category: 'Design', tags: ['Design', 'Full Time'], location: 'New York, USA', salary: 1500, status: 'active' },
    { title: 'BDM', category: 'Sales', tags: ['Sales', 'Full Time'], location: 'New York, USA', salary: 1000, status: 'active' },
    { title: 'React JS', category: 'Developer', tags: ['Developer', 'Full Time'], location: 'California, USA', salary: 2000, status: 'active' },
    { title: 'HR Executive', category: 'HR', tags: ['HR', 'Full Time', 'Remote'], location: 'California, USA', salary: 3600, status: 'inactive' },
    { title: 'Python Developer', category: 'Developer', tags: ['Developer', 'Full Time'], location: 'New York, USA', salary: 1500, status: 'inactive' },
    { title: 'Python Developer', category: 'Developer', tags: ['Developer', 'Full Time'], location: 'New York, USA', salary: 1500, status: 'completed' }
   
  ];
 
  showAddJobForm: boolean = false;
  departments: string[] = ['Design', 'Sales', 'Development', 'HR', 'Marketing'];
  locations: string[] = ['California, USA', 'New York, USA', 'Texas, USA'];
 
  addJob() {
    this.showAddJobForm = true;
  }
 
  closeAddJobForm() {
    this.showAddJobForm = false;
  }
  // jobs: any[] = []; // Empty array to show "No Data to Display"
  searchText: string = '';
  getFilteredJobs(status: string) {
    return this.jobs.filter(job => job.status === status && job.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
