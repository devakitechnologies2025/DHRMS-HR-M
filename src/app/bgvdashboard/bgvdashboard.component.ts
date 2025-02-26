import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bgvdashboard',
  templateUrl: './bgvdashboard.component.html',
  styleUrls: ['./bgvdashboard.component.css']
})
export class BgvdashboardComponent {
  updateDate: string;

  constructor(private router: Router) {
    this.updateDate = `Update: ${new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    })}`;
  }
  navigateToBGV() {
    this.router.navigate(['/bgvheader/bgv']);  // Ensure this matches the routing path
  }
}
