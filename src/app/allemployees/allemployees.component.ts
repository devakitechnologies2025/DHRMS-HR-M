import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-allemployees',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './allemployees.component.html',
  styleUrl: './allemployees.component.css',
})

export class AllemployeesComponent implements OnInit {
  emp: any[] = [
    { name: 'John Doe', id: 'E001', department: 'HR', designation: 'Manager', mode: 'Work From Home', assigned: 'Yes', project: 'Project Alpha', image: '../../assets/people/p1.jpeg', },
    { name: 'Jane Smith', id: 'E002', department: 'IT', designation: 'Developer', mode: 'Office', assigned: 'No', project: 'Project Beta', image: '../../assets/people/p2.jpeg', },
    { name: 'Paul Adams', id: 'E003', department: 'Finance', designation: 'Accountant', mode: 'Hybrid', assigned: 'Yes', project: 'Project Gamma', image: '../../assets/people/p3.jpeg', },
    { name: 'Mary Johnson', id: 'E004', department: 'HR', designation: 'Recruiter', mode: 'Office', assigned: 'No', project: 'Project Alpha', image: '../../assets/people/p4.jpeg', },
    { name: 'James Brown', id: 'E005', department: 'Marketing', designation: 'SEO Specialist', mode: 'Work From Home', assigned: 'Yes', project: 'Project Beta', image: '../../assets/people/p5.jpeg', },
    { name: 'John Doe', id: 'E006', department: 'HR', designation: 'Manager', mode: 'Work From Home', assigned: 'Yes', project: 'Project Alpha', image: '../../assets/people/p1.jpeg', },
    { name: 'Jane Smith', id: 'E007', department: 'IT', designation: 'Developer', mode: 'Office', assigned: 'No', project: 'Project Beta', image: '../../assets/people/p2.jpeg', },
    { name: 'Paul Adams', id: 'E008', department: 'Finance', designation: 'Accountant', mode: 'Hybrid', assigned: 'Yes', project: 'Project Gamma', image: '../../assets/people/p3.jpeg', },
    { name: 'Mary Johnson', id: 'E009', department: 'HR', designation: 'Recruiter', mode: 'Office', assigned: 'No', project: 'Project Alpha', image: '../../assets/people/p4.jpeg', },
    { name: 'James Brown', id: 'E010',department: 'Marketing', designation: 'SEO Specialist', mode: 'Work From Home', assigned: 'Yes', project: 'Project Beta' , image: '../../assets/people/p5.jpeg',},
    { name: 'John Doe', id: 'E001', department: 'HR', designation: 'Manager', mode: 'Work From Home', assigned: 'Yes', project: 'Project Alpha' , image: '../../assets/people/p1.jpeg',},
    { name: 'Jane Smith', id: 'E002', department: 'IT', designation: 'Developer', mode: 'Office', assigned: 'No', project: 'Project Beta', image: '../../assets/people/p2.jpeg', },
    { name: 'Paul Adams', id: 'E003', department: 'Finance', designation: 'Accountant', mode: 'Hybrid', assigned: 'Yes', project: 'Project Gamma', image: '../../assets/people/p3.jpeg', },
    { name: 'Mary Johnson', id: 'E004', department: 'HR', designation: 'Recruiter', mode: 'Office', assigned: 'No', project: 'Project Alpha', image: '../../assets/people/p4.jpeg', },
    { name: 'James Brown', id: 'E005', department: 'Marketing', designation: 'SEO Specialist', mode: 'Work From Home', assigned: 'Yes', project: 'Project Beta' , image: '../../assets/people/p5.jpeg',},
    
  ];
  isViewing = false;
  isEditing = false;
  pagedEmployees = [...this.emp]; // For pagination
  selectedEmployee: any = null;  // For viewing details
  editEmployeeData: any = null;  // For editing an employee
  showFilterSection = false;
  currentPage = 1;
  itemsPerPage = 10;
  totalRecords = this.emp.length;
  recordsRange = `1 - ${this.itemsPerPage} of ${this.totalRecords}`;
 
  

  // Filters
  departments = ['Design','Java','HR','Phython',  'Sales', 'ReackJs','Business Analyst','Account','Project Manager','NodeJs'];
  selectedDepartments: string[] = [];
  
  projects = ['Project 1', 'Project 2', 'Project 3'];
  selectedProjects: string[] = [];
  
  workModes = ['Work From Home', 'Office', 'Hybrid'];
  selectedWorkMode: string = '';
  
  toggleDepartmentSelection(dept: string) {
    const index = this.selectedDepartments.indexOf(dept);
    if (index > -1) {
      this.selectedDepartments.splice(index, 1);
    } else {
      this.selectedDepartments.push(dept);
    }
  }
  
  selectWorkMode(mode: string) {
    this.selectedWorkMode = mode;
  }
  
  toggleProjectSelection(project: string) {
    const index = this.selectedProjects.indexOf(project);
    if (index > -1) {
      this.selectedProjects.splice(index, 1);
    } else {
      this.selectedProjects.push(project);
    }
  }


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.updatePagedEmployees();
    this.updateRecordsRange();
  }

  // Update the employees shown per page
  updatePagedEmployees(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedEmployees = this.emp.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= Math.ceil(this.totalRecords / this.itemsPerPage)) {
      this.currentPage = page;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.pagedEmployees = this.emp.slice(startIndex, endIndex);
    }
  }

  // Update range display (e.g., "1 to 10 out of 20 records")
  updateRecordsRange(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalRecords);
    this.recordsRange = `${start + 1} to ${end} out of ${this.totalRecords} records`;
  }

  // Handle deleting an employee
  deleteEmployee(employeeId: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.emp = this.emp.filter(emp => emp.id !== employeeId);
      this.totalRecords = this.emp.length;
      this.updatePagedEmployees();
      this.updateRecordsRange();
      alert('Employee deleted successfully.');
    }
  }

  onRecordsChange(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.goToPage(1);
  }

  toggleFilterSection() {
    this.showFilterSection = !this.showFilterSection;
  }

  applyFilters() {
    this.showFilterSection = false;
  }

  cancelFilters() {
    this.showFilterSection = false;
  }

  // Reset filters
  resetFilters(): void {
    this.selectedDepartments = [];
    this.selectedProjects = [];
    this.selectedWorkMode = '';
    console.log('Filters reset');
  }


  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    this.editEmployeeData = null;
  }

editEmployee(emp: any) {
  this.selectedEmployee = emp;
  this.isEditing = true;
  this.isViewing = false;
  
  // Copy the employee details into editEmployeeData to avoid direct binding
  this.editEmployeeData = { ...emp };
}



closeModal() {
  this.selectedEmployee = null;
  this.editEmployeeData = null;
}

resetEmployeeData() {
  if (this.editEmployeeData) {
    const original = this.emp.find(emp => emp.id === this.editEmployeeData.id);
    if (original) {
      this.editEmployeeData = { ...original };
    }
  }
}

saveEmployeeData() {
  const index = this.emp.findIndex(emp => emp.id === this.editEmployeeData.id);
  if (index !== -1) {
    this.emp[index] = { ...this.editEmployeeData };
    this.pagedEmployees = [...this.emp];
    this.closeModal();
  }
}
openFilterModal() {
  this.showFilterSection = true;
  document.body.classList.add("modal-open"); // Add class to body
}

closeFilterModal() {
  this.showFilterSection = false;
  document.body.classList.remove("modal-open"); // Remove class from body
}

}
