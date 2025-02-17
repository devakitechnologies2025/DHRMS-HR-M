import { Component } from '@angular/core';

interface Branch {
  city: string;
  address: string;
  pincode: number;
  country: string;
}

@Component({
  selector: 'app-branch',
  standalone: false,
  
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.css'
})
export class BranchComponent {
  branches: Branch[] = [
    {
      city: "Bangalore",
      address: "MG Road, Bangalore ",
      pincode: 560001,
      country: "India",
    },
    {
      city: "Mumbai",
      address: "Nariman Point, Mumbai",
      pincode: 400021,
      country: "India",
    },
    {
      city: "Delhi",
      address: "Connaught Place, Delhi",
      pincode: 110001,
      country: "India",
    },
    {
      city: "Hyderabad",
      address: "Hitech City, Hyderabad",
      pincode: 500081,
      country: "India",
    },
    {
      city: "Chennai",
      address: "Anna Salai, Chennai",
      pincode: 600002,
      country: "India",
    },
    {
      city: "Kolkata",
      address: "Park Street, Kolkata",
      pincode: 700016,
      country: "India",
    },
    {
      city: "Pune",
      address: "Shivaji Nagar, Pune",
      pincode: 411005,
      country: "India",
    },
    {
      city: "New York",
      address: "5th Avenue, New York",
      pincode: 10001,
      country: "USA",
    },
    {
      city: "London",
      address: "Oxford Street, London",
      pincode: 5454,
      country: "UK",
    },
    
  
  ];
  showAddbranchsForm = false;  
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];
  cities: string[] = ['New York', 'London', 'Mumbai', 'Toronto'];
  openAddbranchsForm() {
    this.showAddbranchsForm = true;
   
  }
 
  closeAddbranchsForm() {
    this.showAddbranchsForm = false;
  }
  // addBranch() {
  //   if (this.branches.country && this.branches.branchCity && this.branches.fullAddress && this.branches.pincode) {
  //     console.log('Branch Data:', this.branchData);
  //     alert('Branch Added Successfully!'); // You can replace this with API call
  //     this.closeAddbranchsForm(); // Close modal after submission
  //   } else {
  //     alert('Please fill all the fields!');
  //   }
  // }
}
