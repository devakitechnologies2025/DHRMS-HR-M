import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-bgvallemployees',
  standalone: false,
  
  templateUrl: './bgvallemployees.component.html',
  styleUrl: './bgvallemployees.component.css'
})
export class BgvallemployeesComponent {

  showFilterSection: boolean = false; // Controls visibility of the filter popup

  // Background Verification (BGV) Filter Data
  verificationStatus: string[] = ['Pending', 'In Progress', 'Completed', 'Failed'];
  selectedVerificationStatus: string[] = [];

  verificationCategories: string[] = [
    'Employment History', 'Education Verification', 'Criminal Record Check',
    'Identity Verification', 'Address Verification', 'Reference Check'
  ];
  selectedVerificationCategory: string = '';

  verificationOutcome: string[] = ['Verified', 'Discrepancy Found', 'Red Flag'];
  selectedVerificationOutcome: string[] = [];

  timeframeOfVerification: string[] = ['Last 7 Days', 'Last 30 Days', 'Last 6 Months'];
  selectedTimeframe: string = '';

  constructor(private router: Router,private cdr: ChangeDetectorRef) {}

  // ✅ Toggle Filter Section
  toggleFilterSection() {
    this.showFilterSection = !this.showFilterSection;
    this.cdr.detectChanges(); // Force UI update
  }

  // ✅ Toggle Verification Status
  toggleVerificationStatus(status: string) {
    const index = this.selectedVerificationStatus.indexOf(status);
    if (index > -1) {
      this.selectedVerificationStatus.splice(index, 1);
    } else {
      this.selectedVerificationStatus.push(status);
    }
  }

  // ✅ Select a Verification Category
  selectVerificationCategory(category: string) {
    this.selectedVerificationCategory = category;
  }

  // ✅ Toggle Verification Outcome
  toggleVerificationOutcome(outcome: string) {
    const index = this.selectedVerificationOutcome.indexOf(outcome);
    if (index > -1) {
      this.selectedVerificationOutcome.splice(index, 1);
    } else {
      this.selectedVerificationOutcome.push(outcome);
    }
  }

  // ✅ Reset Filters
  cancelFilters() {
    this.showFilterSection = false;
    this.selectedVerificationStatus = [];
    this.selectedVerificationCategory = '';
    this.selectedVerificationOutcome = [];
    this.selectedTimeframe = '';
  }

  // ✅ Apply Filters (Can be integrated with an API)
  applyFilters() {
    console.log('Applied Filters:', {
      status: this.selectedVerificationStatus,
      category: this.selectedVerificationCategory,
      outcome: this.selectedVerificationOutcome,
      timeframe: this.selectedTimeframe
    });

    this.showFilterSection = false; // Hide the filter popup after applying
  }




    candidates = [
      {
        id: 1,
        name: 'Darlene Robertson',
        mobile: '345321231',
        email: 'test@gmail.com',
        company: 'TCS',
        image: '../../assets/people/p1.jpeg',
        status: { approved: true, pending: false, rejected: false ,inProgress: false},
        category: 'Employment History',  // 🔥 Add this
        outcome: 'Verified'              // 🔥 Add this
      },
      {
        id: 2,
        name: 'Floyd Miles',
        mobile: '987890345',
        email: 'test@gmail.com',
        company: 'Infosys',
        image: '../../assets/people/p2.jpeg',
        status: { approved: false, pending: true, rejected: false,inProgress: true },
        category: 'Education Verification',  // 🔥 Add this
        outcome: 'Discrepancy Found'         // 🔥 Add this
      },
      {
        id: 3,
        name: 'Jacob Jones',
        mobile: '009918765',
        email: 'test@gmail.com',
        company: 'Deloitte',
        image: '../../assets/people/p3.jpeg',
        status: { approved: false, pending: false, rejected: true ,inProgress: false},
        category: 'Criminal Record Check',  // 🔥 Add this
        outcome: 'Red Flag'                 // 🔥 Add this
      },
      {
        id: 4,
        name: 'Marvin McKinney',
        mobile: '238870122',
        email: 'test@gmail.com',
        company: 'EY',
        image: '../../assets/people/p4.jpeg',
        status: { approved: false, pending: true, rejected: false,inProgress: true },
        category: 'Education Verification',  // 🔥 Add this
        outcome: 'Discrepancy Found'         
      }
    ];
  
    pagedEmployees = [...this.candidates];
    selectedCandidate: any = null;
    isEditing = false;
    candidateToDelete: any = null;

     // ✅ Redirect to BGV Filter Component
  goToBgvFilter() {
    this.router.navigate(['/bgv-filter']);
  }

  
   
  
    navigateToBGV() {
      this.router.navigate(['/bgvheader/bgv']);
    }
  
    // Open View Modal
    viewCandidate(candidate: any) {
      this.selectedCandidate = candidate;
      this.isEditing = false;
    }
  
    // Open Edit Modal
    setEditCandidate(candidate: any) {
      this.selectedCandidate = { ...candidate }; // Copy candidate data for editing
      this.isEditing = true;
    }
  
    // Save Changes
    saveChanges() {
      const index = this.candidates.findIndex(c => c.id === this.selectedCandidate.id);
      if (index !== -1) {
        this.candidates[index] = { ...this.selectedCandidate };
        this.pagedEmployees = [...this.candidates];
      }
      this.closeModal();
    }
  
    // Open Delete Confirmation
    confirmDelete(candidate: any) {
      this.candidateToDelete = candidate;
    }
  
    // Handle deleting an employee
    deleteCandidate() {
      if (this.candidateToDelete) {
        this.candidates = this.candidates.filter(emp => emp.id !== this.candidateToDelete.id);
        this.pagedEmployees = [...this.candidates];
        alert('Employee deleted successfully.');
        this.closeDeleteModal();
      }
    }
  
    // Close Modals
    closeModal() {
      this.selectedCandidate = null;
      this.isEditing = false;
    }
  
    closeDeleteModal() {
      this.candidateToDelete = null;
    }
  
    // Reset Employee Data
    resetEmployeeData() {
      if (this.selectedCandidate && this.selectedCandidate.id) {
        const original = this.candidates.find(candidate => candidate.id === this.selectedCandidate.id);
        if (original) {
          Object.assign(this.selectedCandidate, original);
        }
      }
    }
  
    saveEmployeeData() {
      this.saveChanges();
    }
    
  }