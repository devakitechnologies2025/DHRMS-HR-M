import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDepartService {
  private showFormSubject = new BehaviorSubject<boolean>(false);
  showForm$ = this.showFormSubject.asObservable();

  private departments: { name: string; employees: any[] }[] = [];
  private departmentsSubject = new BehaviorSubject(this.departments);
  departments$ = this.departmentsSubject.asObservable();
  addProject: any;

  // Method to set the visibility of the form
  toggleFormVisibility(isVisible: boolean) {
    this.showFormSubject.next(isVisible);
  }
  addDepartment(departmentName: string) {
    const newDepartment = { name: departmentName, employees: [] };
    this.departments.push(newDepartment); // Add the new department
    this.departmentsSubject.next([...this.departments]); // Notify subscribers with a new array reference
  }

  
}
