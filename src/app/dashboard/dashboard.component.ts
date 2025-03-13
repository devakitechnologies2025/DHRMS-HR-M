import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('attendanceChart', { static: false }) attendanceChartRef!: ElementRef<HTMLCanvasElement>;

  selectedFilter: 'today' | 'yesterday' | 'last7days' | 'last30days' = 'today';
  chartInstance: Chart | undefined;
  showAllAttendance = false;

  attendanceData = [
    { name: 'Leasie Watson', designation: 'Team Lead - Design', type: 'Office', checkIn: '09:27 AM', status: 'On Time' },
    { name: 'Darlene Robertson', designation: 'Web Designer', type: 'Office', checkIn: '10:15 AM', status: 'Late' },
    { name: 'Jacob Jones', designation: 'Medical Assistant', type: 'Remote', checkIn: '10:24 AM', status: 'Late' },
    { name: 'Kathryn Murphy', designation: 'Marketing Coordinator', type: 'Office', checkIn: '09:10 AM', status: 'On Time' },
    { name: 'Leslie Alexander', designation: 'Data Analyst', type: 'Office', checkIn: '09:15 AM', status: 'On Time' },
    { name: 'Ronald Richards', designation: 'Python Developer', type: 'Remote', checkIn: '09:29 AM', status: 'On Time' },
    { name: 'Jenny Wilson', designation: 'React JS Developer', type: 'Remote', checkIn: '11:30 AM', status: 'Late' }
  ];

  displayedAttendanceData = this.attendanceData.slice(0, 5);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart(); // ✅ Calling the corrected initChart()
    }
  }

  initChart() {
    setTimeout(() => {
      if (!this.attendanceChartRef || !this.attendanceChartRef.nativeElement) {
        console.warn("Canvas element not found!");
        return;
      }

      const canvas = this.attendanceChartRef.nativeElement;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        console.error("Unable to get 2D context for canvas!");
        return;
      }

      this.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: this.getChartData(),
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { stacked: true, grid: { display: false } },
            y: { stacked: true, beginAtZero: true, max: 100, grid: { display: false } }
          }
        }
      });
    }, 500);
  }

  updateChartData() {
    if (this.chartInstance) {
      this.chartInstance.data = this.getChartData();
      this.chartInstance.update();
    }
  }

  toggleAttendanceView() {
    this.showAllAttendance = !this.showAllAttendance;
    this.displayedAttendanceData = this.showAllAttendance ? this.attendanceData : this.attendanceData.slice(0, 5);
  }

  stats = [
    { title: 'Total Employee', value: 560, change: 1.75, icon: 'bi-people' },
    { title: 'Total Applicant', value: 1050, change: 5.5, icon: 'bi-briefcase' },
    { title: 'Today Attendance', value: 470, change: -2.3, icon: 'bi-calendar-check' },
    { title: 'Total Projects', value: 250, change: 1.2, icon: 'bi-folder' }
  ];
  

  getChartData() {
    const dataMap: any = {
      today: { onTime: [60, 70, 65, 80, 75, 50, 60], late: [20, 15, 20, 10, 15, 30, 25], absent: [20, 15, 15, 10, 10, 20, 15] },
      yesterday: { onTime: [50, 65, 70, 75, 80, 55, 65], late: [30, 20, 15, 10, 10, 25, 20], absent: [20, 15, 15, 15, 10, 20, 15] },
      last7days: { onTime: [55, 60, 70, 65, 80, 75, 60], late: [25, 20, 15, 20, 10, 15, 20], absent: [20, 20, 15, 15, 10, 10, 20] },
      last30days: { onTime: [70, 75, 80, 85, 90, 60, 70], late: [15, 10, 10, 5, 5, 20, 15], absent: [15, 15, 10, 10, 5, 20, 15] }
    };

    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        { label: 'On Time', data: dataMap[this.selectedFilter].onTime, backgroundColor: '#3B82F6', barThickness: 16, maxBarThickness: 22 },
        { label: 'Late', data: dataMap[this.selectedFilter].late, backgroundColor: '#F59E0B', barThickness: 16, maxBarThickness: 22 },
        { label: 'Absent', data: dataMap[this.selectedFilter].absent, backgroundColor: '#EF4444', barThickness: 16, maxBarThickness: 22 }
      ]
    };
  }

}
