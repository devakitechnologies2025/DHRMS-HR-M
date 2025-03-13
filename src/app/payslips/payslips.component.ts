import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payslips',
  standalone: false,
  templateUrl: './payslips.component.html',
  styleUrl: './payslips.component.css'
})
export class PayslipsComponent {
  templates: { name: string; file?: File }[] = [{ name: 'Template 1' }, { name: 'Template 2' }];
  isModalOpen: boolean = false;
  showModal1: boolean = false;
  showModal2: boolean = false;
  selectedTemplate: string = '';

   constructor(private router: Router){}

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  // Function to trigger file selection
  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }

// Function to handle file upload
uploadTemplate(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    const newTemplateNumber = this.templates.length + 1; // Keep sequence
    this.templates.push({ name: `Template ${newTemplateNumber}`, file });
  }
}

 // Open modal logic remains the same
 openPayslipModal(template: { name: string; file?: File }) {
  this.selectedTemplate = template.name;
  this.isModalOpen = true;

  if (template.name === 'Template 1') {
    this.showModal1 = true;
    this.showModal2 = false;
  } else if (template.name === 'Template 2') {
    this.showModal1 = false;
    this.showModal2 = true;
  }
}

  closePayslipModal() {
    this.isModalOpen = false;
    this.selectedTemplate = '';
    this.showModal1 = false;
    this.showModal2 = false;
  }

  downloadPayslip() {
    let payslipContent: HTMLElement | null = null;
  
    if (this.showModal1) {
      payslipContent = document.querySelector('#payslipModal1 .payslip-content') as HTMLElement;
    } else if (this.showModal2) {
      payslipContent = document.querySelector('#payslipModal2 .payslip-container') as HTMLElement;
    }
  
    if (payslipContent) {
      html2canvas(payslipContent).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('payslip.pdf');
      });
    } else {
      console.error('Payslip content not found');
    }
  }

  save() {
    if (this.selectedTemplate) {
      this.router.navigate(['/payroll'], { queryParams: { bankId: this.selectedTemplate } });
    }
  }

  handleCancel() {
    this.router.navigate(['/payroll-main']);
  }
 
}
