// add-department.component.ts
import { Component, OnInit } from '@angular/core';
import { AddDepartService } from '../add-depart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  showAddDepartmentForm: boolean = false;
  departmentName: string = '';

  constructor(private departmentService: AddDepartService) {
    this.departmentService.showForm$.subscribe(isVisible => {
      this.showAddDepartmentForm = isVisible;
    });
  }

  ngOnInit() {
    // Subscribe to the form visibility
    this.departmentService.showForm$.subscribe(
      (isVisible) => (this.showAddDepartmentForm = isVisible)
    );
  }

  openForm() {
    this.departmentService.toggleFormVisibility(true);
  }

  closeForm() {
    this.departmentService.toggleFormVisibility(false);
    this.departmentName = '';
  }

  onAddDepartment() {
    if (this.departmentName.trim()) {
      this.departmentService.addDepartment(this.departmentName);
      this.closeForm();
    }
  }
}
