import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  standalone: false,
})
export class FilterComponent  {
  @Output() filtersApplied = new EventEmitter<any>();
  @Output() filtersReset = new EventEmitter<void>();

  showFilterSection = false;

  departments = ['HR', 'IT', 'Finance', 'Marketing', 'Sales', 'Engineering', 'Support', 'Operations', 'Admin', 'Legal'];
  selectedDepartments: string[] = [];

  projects = ['Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta', 'Project Omega'];
  selectedProjects: string[] = [];

  workModes = ['Work From Home', 'Office', 'Hybrid'];
  selectedWorkMode: string = '';

  toggleFilterSection() {
    this.showFilterSection = !this.showFilterSection;
  }

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

  applyFilters() {
    this.filtersApplied.emit({
      departments: this.selectedDepartments,
      projects: this.selectedProjects,
      workMode: this.selectedWorkMode,
    });
    this.showFilterSection = false;
  }

  resetFilters() {
    this.selectedDepartments = [];
    this.selectedProjects = [];
    this.selectedWorkMode = '';
    this.filtersReset.emit();
  }
}