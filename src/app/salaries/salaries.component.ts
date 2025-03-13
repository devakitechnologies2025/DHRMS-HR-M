import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

interface Bank {
  id: number;
  name: string;
  logo: string;
  details: string;
}

@Component({
  selector: 'app-salaries',
  standalone: false,
  
  templateUrl: './salaries.component.html',
  styleUrl: './salaries.component.css'
})
export class SalariesComponent {

  banks: Bank[] = [
    { id: 1, name: "HDFC Bank", logo: "assets/hdfc.png", details: "HDFC Bank Details" },
    { id: 2, name: "ICICI Bank", logo: "assets/icici.png", details: "ICICI Bank Details" },
    { id: 3, name: "Kotak Bank", logo: "assets/kotak.png", details: "Kotak Bank Details" },
    { id: 4, name: "Standard Chartered", logo: "assets/standard chartered.png", details: "Standard Chartered Bank Details" }
  ];

  selectedBank: Bank | null = null;
  newBank: Bank = { id: 0, name: '', logo: '', details: '' };
  showAddBankPopup: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  selectBank(bank: Bank) {
    this.selectedBank = bank;
  }

  toggleAddBankPopup() {
    this.showAddBankPopup = !this.showAddBankPopup;
    this.cdr.detectChanges();
  }

  addBank() {
    if (this.newBank.name && this.newBank.logo && this.newBank.details) {
      this.newBank.id = this.banks.length + 1;
      this.banks.push({ ...this.newBank });
      this.newBank = { id: 0, name: '', logo: '', details: '' };
      this.showAddBankPopup = false;
    }
  }

  save() {
    if (this.selectedBank) {
      this.router.navigate(['/payroll'], { queryParams: { bankId: this.selectedBank.id } });
    }
  }

  handleCancel() {
    this.router.navigate(['/payroll-main']);
  }
}