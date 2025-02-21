import { Component } from '@angular/core';

interface Branch {
  city: string;
  address: string;
  pincode: number;
  country: string;
  state:string;
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
      state:"karnataka",
      city: "Bangalore",
      address: "MG Road, Bangalore ",
      pincode: 560001,
      country: "India",
    },
    {
      state:"maharastra",
      city: "Mumbai",
      address: "Nariman Point, Mumbai",
      pincode: 400021,
      country: "India",
    },
    {
      state:"Delhi",
      city: "Delhi",
      address: "Connaught Place, Delhi",
      pincode: 110001,
      country: "India",
    },
    {
      state:"Telangana",
      city: "Hyderabad",
      address: "Hitech City, Hyderabad",
      pincode: 500081,
      country: "India",
    },
    {
      state:"Tamilnadu",
      city: "Chennai",
      address: "Anna Salai, Chennai",
      pincode: 600002,
      country: "India",
    },
    {
      state:"West Bengal",
      city: "Kolkata",
      address: "Park Street, Kolkata",
      pincode: 700016,
      country: "India",
    },
    {
      state:"Maharastara",
      city: "Pune",
      address: "Shivaji Nagar, Pune",
      pincode: 411005,
      country: "India",
    },
    {
      state:"",
      city: "New York",
      address: "5th Avenue, New York",
      pincode: 10001,
      country: "USA",
    },
    {
      state:"",
      city: "London",
      address: "Oxford Street, London",
      pincode: 5454,
      country: "UK",
    },
    
  
  ];
  showAddbranchsForm = false;  
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];
  state: string[] = ['Andhra Pradesh', 'London', 'Mumbai', 'Toronto'];
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

  showFilterSection = false;
  searchTerm: string = '';
  filters = { city: '', country: '',state:'' };
  filteredBranches = [...this.branches];
  get uniqueCities() {
    return [...new Set(this.branches.map(branch => branch.city))];
  }

  get uniqueCountries() {
    return [...new Set(this.branches.map(branch => branch.country))];
  }
  get uniqueState() {
    return [...new Set(this.branches.map(branch => branch.state))];
  }
  toggleFilterSection() {
    this.showFilterSection = !this.showFilterSection;
}
 
  cancelFilters() {
    this.showFilterSection = false;
  }

  applyFilters() {
    this.filteredBranches = this.branches.filter(branch => {
      return (
        (this.searchTerm === '' || branch.city.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (this.filters.city === '' || branch.city === this.filters.city) &&
        (this.filters.country === '' || branch.country === this.filters.country)&&
        (this.filters.state === '' || branch.state === this.filters.state)
      );
    });
  }
}
