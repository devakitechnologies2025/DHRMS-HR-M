import { Component } from '@angular/core';
import { AddDepartService } from '../add-depart.service';
interface Employee {
  img: string;
  name: string;
  designation: string;
}

// Define an interface for Department
interface Department {
  name: string;
  employees: Employee[];
  greeting?: string; // Optional property
}
@Component({
  selector: 'app-banking',
  standalone: false,
  
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.css'
})
export class BankingComponent {
   constructor(private departmentService: AddDepartService) {}
   departments: Department[] = [
    {
      name: ' Personal Loan Department',
      employees: [
        { img: 'p1.jpeg', name: 'Alice', designation: 'Developer' },
        { img: 'p2.jpeg', name: 'Bob', designation: 'Tester' },
        { img: 'p3.jpeg', name: 'Charlie', designation: 'Designer' },
        { img: 'p4.jpeg', name: 'David', designation: 'Manager' },
        { img: 'p5.jpeg', name: 'Eva', designation: 'Developer' }
      ]
    },
    {
      name: 'Credit card',
      employees: [
        { img: 'p1.jpeg', name: 'Sam', designation: 'Support Lead' },
        { img: 'p2.jpeg', name: 'Paul', designation: 'Analyst' },
        { img: 'p3.jpeg', name: 'John', designation: 'Technician' },
        { img: 'p4.jpeg', name: 'Mark', designation: 'Supervisor' },
        { img: 'p5.jpeg', name: 'Lisa', designation: 'Coordinator' }
      ]
    },
    {
      name: 'HR Department',
      employees: [
        { img: 'p1.jpeg', name: 'Sara', designation: 'HR Manager' },
        { img: 'p5.jpeg', name: 'Tom', designation: 'Recruiter' },
        { img: 'p3.jpeg', name: 'Mike', designation: 'Trainer' },
        { img: 'p2.jpeg', name: 'Anna', designation: 'Coordinator' },
        { img: 'p4.jpeg', name: 'Nina', designation: 'Assistant' }
      ]
    },
    {
      name: 'Human resources manager',
      employees: [
        { img: 'p5.jpeg', name: 'Emma', designation: 'Accountant' },
        { img: 'p3.jpeg', name: 'James', designation: 'Analyst' },
        { img: 'p4.jpeg', name: 'Sophia', designation: 'Controller' },
        { img: 'p2.jpeg', name: 'Liam', designation: 'Cashier' },
        { img: 'p1.jpeg', name: 'Mia', designation: 'Clerk' }
      ]
    },
    {
      name: 'Home Loan',
      employees: [
        { img: 'p5.jpeg', name: 'Emma', designation: 'Accountant' },
        { img: 'p3.jpeg', name: 'James', designation: 'Analyst' },
        { img: 'p4.jpeg', name: 'Sophia', designation: 'Controller' },
        { img: 'p2.jpeg', name: 'Liam', designation: 'Cashier' },
        { img: 'p1.jpeg', name: 'Mia', designation: 'Clerk' }
      ]
    }
  ];

  // Update department greetings dynamically
  updateDepartmentGreetings() {
    this.departments.forEach(department => {
      department.greeting = `${department.employees.length} Members`; // Dynamically set greeting
    });
  }


  ngOnInit() {
    this.updateDepartmentGreetings();

    // Subscribe to the service's departments and merge with existing ones
    this.departmentService.departments$.subscribe((newDepartments) => {
      this.departments = this.mergeDepartments(this.departments, newDepartments);
      this.updateDepartmentGreetings(); // Update greetings dynamically
    });
  }


  mergeDepartments(existingDepartments: Department[], newDepartments: Department[]): Department[] {
    const merged = [...existingDepartments];

    newDepartments.forEach((newDepartment) => {
      // Check if the department already exists by its name
      if (!existingDepartments.some((dept) => dept.name === newDepartment.name)) {
        merged.push(newDepartment);
      }
    });

    return merged;
  }
  // Method to trigger the form
  openAddDepartmentForm() {
    this.departmentService.toggleFormVisibility(true);
  }

}
