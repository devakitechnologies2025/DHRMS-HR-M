import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import saveAs from 'file-saver';



@Component({
  selector: 'app-pf',
  standalone: false,
  
  templateUrl: './pf.component.html',
  styleUrl: './pf.component.css'
})
export class PfComponent {
  excelData: any[][] = []; // To store Excel data

 // Function to open EPFO portal
 openEPFOPortal() {
  window.open('https://www.google.com/search?q=epfo+portal', '_blank');
}

// Function to generate and download PF Data Excel
downloadPFData() {
  const pfData = [
    ['S.No', 'Date', 'UN Number', 'Employee Name', 'Mobile Number', 'Mail Id', 'Date Of Joining', 'PF Amount', 'Bank Account', 'Salary'],
    [1, '2024-03-10', '2002001', 'Rahul Sharma', '9876543210', 'rahul.sharma@email.com', '2021-06-15', '₹6,500', '1234567810', '₹65,000'],
    [2, '2024-03-10', '2002002', 'Pooja Patel', '9123456789', 'pooja.patel@email.com', '2019-08-20', '₹5,800', '1234567811', '₹58,000'],
    [3, '2024-03-10', '2002003', 'Amit Verma', '8987654321', 'amit.verma@email.com', '2017-05-10', '₹7,000', '1234567812', '₹70,000'],
    [4, '2024-03-10', '2002004', 'Neha Singh', '8765432190', 'neha.singh@email.com', '2022-09-25', '₹6,200', '1234567813', '₹62,000'],
    [5, '2024-03-10', '2002005', 'Vikram Roy', '7890123456', 'vikram.roy@email.com', '2016-12-05', '₹5,900', '1234567814', '₹59,000'],
    [6, '2024-03-10', '2002006', 'Sonia Das', '8901234567', 'sonia.das@email.com', '2015-04-18', '₹6,800', '1234567815', '₹68,000'],
    [7, '2024-03-10', '2002007', 'Rajesh Kumar', '9012345678', 'rajesh.kumar@email.com', '2023-02-12', '₹6,400', '1234567816', '₹64,000'],
    [8, '2024-03-10', '2002008', 'Priya Menon', '9123456780', 'priya.menon@email.com', '2014-07-30', '₹7,200', '1234567817', '₹72,000'],
    [9, '2024-03-10', '2002009', 'Arjun Mehta', '9234567890', 'arjun.mehta@email.com', '2020-11-22', '₹6,000', '1234567818', '₹60,000'],
    [10, '2024-03-10', '2002010', 'Kavita Iyer', '9345678901', 'kavita.iyer@email.com', '2018-03-10', '₹6,500', '1234567819', '₹65,000'],
  ];

  // Create a worksheet
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(pfData);
  
  // Create a workbook
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'PF Data');

  // Save the file
  XLSX.writeFile(wb, 'PF_Data.xlsx');
}

openExcelSheet() {
  const worksheetData = [
    ['S.No','Date', 'UN Number', 'Employee Name', 'Mobile Number', 'Mail Id', 'Date Of Joining', 'PF Amount', 'Bank Account', 'Salary'],
    
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "NewEntry");

  // Generate Excel file and trigger download
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(file, "New_Entry.xlsx");
}

}

