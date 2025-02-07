import { Component } from '@angular/core';
import { AddDepartService } from '../add-depart.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any[]  = [
    {
      projectName: "E-commerce Platform",
      country: "USA",
      budget: "1000000$",
      projectManager: { img: "p2.jpeg", name: "John Doe" },
      status: "Complete",
      startDate: "2023-01-15",
      endDate: "2024-06-27",
      clientName: "TechSolutions Inc.",
      teamMembersCount: 10,
      teamMembers: [
        { name: "John Doe", designation: "Team Lead" },
        { name: "Jane Smith", designation: "Developer" },
        { name: "Alice Johnson", designation: "Tester" },
        { name: "Mark Brown", designation: "UI/UX Designer" },
        { name: "Emily Davis", designation: "DevOps Engineer" }
      ]
    },
    {
      projectName: "AI Chatbot Development",
      country: "India",
      budget: "500000$",
      projectManager: { img: "p1.jpeg", name: "Aditi Rao" },
      status: "Ongoing",
      startDate: "2023-03-01",
      endDate: "2024-12-31",
      clientName: "InnoTech Pvt. Ltd.",
      teamMembersCount: 8,
      teamMembers: [
        { name: "Aditi Rao", designation: "Team Lead" },
        { name: "Rajesh Kumar", designation: "Developer" },
        { name: "Priya Gupta", designation: "Tester" },
        { name: "Sanjay Mehta", designation: "Data Scientist" },
        { name: "Neha Sharma", designation: "Business Analyst" }
      ]
    },
    {
      projectName: "Mobile Banking App",
      country: "Canada",
      budget: "1200000$",
      projectManager: { img: "p4.jpeg", name: "Chris Green" },
      status: "Complete",
      startDate: "2022-09-20",
      endDate: "2024-05-15",
      clientName: "FinTech Solutions Inc.",
      teamMembersCount: 12,
      teamMembers: [
        { name: "Chris Green", designation: "Team Lead" },
        { name: "Alex Johnson", designation: "Developer" },
        { name: "Jordan Lee", designation: "Tester" },
        { name: "Sam Wilson", designation: "UI/UX Designer" },
        { name: "Taylor Adams", designation: "Backend Developer" }
      ]
    },
    {
      projectName: "Inventory Management System",
      country: "Germany",
      budget: "800000$",
      projectManager: { img: "p5.jpeg", name: "Helena Schmidt" },
      status: "Ongoing",
      startDate: "2023-06-10",
      endDate: "2024-12-31",
      clientName: "Warehouse Solutions",
      teamMembersCount: 9,
      teamMembers: [
        { name: "Helena Schmidt", designation: "Team Lead" },
        { name: "Liam Brown", designation: "Developer" },
        { name: "Sara White", designation: "Tester" },
        { name: "Lucas Green", designation: "UI/UX Designer" },
        { name: "Nathan Black", designation: "Project Coordinator" }
      ]
    },
    {
      projectName: "Social Media Platform",
      country: "UK",
      budget: "2000000$",
      projectManager: { img: "p1.jpeg", name: "Emma Watson" },
      status: "Complete",
      startDate: "2021-11-05",
      endDate: "2023-10-20",
      clientName: "SocialHub Ltd.",
      teamMembersCount: 15,
      teamMembers: [
        { name: "Emma Watson", designation: "Team Lead" },
        { name: "David Brown", designation: "Developer" },
        { name: "Sophia White", designation: "Tester" },
        { name: "Olivia Johnson", designation: "UI Designer" },
        { name: "James Clark", designation: "Backend Developer" }
      ]
    },
    {
      projectName: "Cloud Migration",
      country: "Australia",
      budget: "750000$",
      projectManager: { img: "p4.jpeg", name: "Liam Brown" },
      status: "Complete",
      startDate: "2022-02-20",
      endDate: "2023-09-15",
      clientName: "CloudSolutions Pty Ltd.",
      teamMembersCount: 11,
      teamMembers: [
        { name: "Liam Brown", designation: "Team Lead" },
        { name: "Ella Green", designation: "Developer" },
        { name: "Noah White", designation: "Tester" },
        { name: "Harper Clark", designation: "UI/UX Designer" },
        { name: "Emma Gray", designation: "System Architect" }
      ]
    },
    {
      projectName: "Healthcare Portal",
      country: "India",
      budget: "650000$",
      projectManager: { img: "p3.jpeg", name: "Rajesh Kumar" },
      status: "Ongoing",
      startDate: "2023-04-01",
      endDate: "2024-08-31",
      clientName: "HealthTech Solutions",
      teamMembersCount: 10,
      teamMembers: [
        { name: "Rajesh Kumar", designation: "Team Lead" },
        { name: "Shilpa Verma", designation: "Developer" },
        { name: "Ramesh Yadav", designation: "Tester" },
        { name: "Ananya Gupta", designation: "Business Analyst" },
        { name: "Karan Singh", designation: "Database Administrator" }
      ]
    },
    {
      projectName: "Education Management System ",
      country: "USA",
      budget: "1300000$",
      projectManager: { img: "p2.jpeg", name: "Sophia Wilson" },
      status: "Complete",
      startDate: "2021-09-10",
      endDate: "2023-07-15",
      clientName: "EduTech Inc.",
      teamMembersCount: 14,
      teamMembers: [
        { name: "Sophia Wilson", designation: "Team Lead" },
        { name: "Ethan Davis", designation: "Developer" },
        { name: "Madison Clark", designation: "Tester" },
        { name: "Isabella Adams", designation: "UI/UX Designer" },
        { name: "Michael Johnson", designation: "Project Coordinator" }
      ]
    },
    {
      projectName: "IoT Home Automation",
      country: "Japan",
      budget: "900000$",
      projectManager: { img: "p1.jpeg", name: "Taro Yamada" },
      status: "Ongoing",
      startDate: "2023-02-15",
      endDate: "2024-10-30",
      clientName: "SmartHome Solutions",
      teamMembersCount: 8,
      teamMembers: [
        { name: "Taro Yamada", designation: "Team Lead" },
        { name: "Kenji Tanaka", designation: "Developer" },
        { name: "Yumi Suzuki", designation: "Tester" },
        { name: "Haruka Mori", designation: "UI Designer" },
        { name: "Seiji Nakamura", designation: "IoT Specialist" }
      ]
    },
    {
      projectName: "Education Management System ",
      country: "USA",
      budget: "1300000$",
      projectManager: { img: "p2.jpeg", name: "Sophia Wilson" },
      status: "Complete",
      startDate: "2021-09-10",
      endDate: "2023-07-15",
      clientName: "EduTech Inc.",
      teamMembersCount: 14,
      teamMembers: [
        { name: "Sophia Wilson", designation: "Team Lead" },
        { name: "Ethan Davis", designation: "Developer" },
        { name: "Madison Clark", designation: "Tester" },
        { name: "Isabella Adams", designation: "UI/UX Designer" },
        { name: "Michael Johnson", designation: "Project Coordinator" }
      ]
    },
    {
      projectName: "IoT Home Automation",
      country: "Japan",
      budget: "900000$",
      projectManager: { img: "p1.jpeg", name: "Taro Yamada" },
      status: "Ongoing",
      startDate: "2023-02-15",
      endDate: "2024-10-30",
      clientName: "SmartHome Solutions",
      teamMembersCount: 8,
      teamMembers: [
        { name: "Taro Yamada", designation: "Team Lead" },
        { name: "Kenji Tanaka", designation: "Developer" },
        { name: "Yumi Suzuki", designation: "Tester" },
        { name: "Haruka Mori", designation: "UI Designer" },
        { name: "Seiji Nakamura", designation: "IoT Specialist" }
      ]
    },
    {
      projectName: "Education Management System ",
      country: "USA",
      budget: "1300000$",
      projectManager: { img: "p2.jpeg", name: "Sophia Wilson" },
      status: "Complete",
      startDate: "2021-09-10",
      endDate: "2023-07-15",
      clientName: "EduTech Inc.",
      teamMembersCount: 14,
      teamMembers: [
        { name: "Sophia Wilson", designation: "Team Lead" },
        { name: "Ethan Davis", designation: "Developer" },
        { name: "Madison Clark", designation: "Tester" },
        { name: "Isabella Adams", designation: "UI/UX Designer" },
        { name: "Michael Johnson", designation: "Project Coordinator" }
      ]
    },
    {
      projectName: "IoT Home Automation",
      country: "Japan",
      budget: "900000$",
      projectManager: { img: "p1.jpeg", name: "Taro Yamada" },
      status: "Ongoing",
      startDate: "2023-02-15",
      endDate: "2024-10-30",
      clientName: "SmartHome Solutions",
      teamMembersCount: 8,
      teamMembers: [
        { name: "Taro Yamada", designation: "Team Lead" },
        { name: "Kenji Tanaka", designation: "Developer" },
        { name: "Yumi Suzuki", designation: "Tester" },
        { name: "Haruka Mori", designation: "UI Designer" },
        { name: "Seiji Nakamura", designation: "IoT Specialist" }
      ]
    },
    
  ];

   constructor(private projectService: AddDepartService ) {
  }
  
  selectedProject: any = null;
  showModal: boolean = false;
  mode: 'view' | 'edit' | null = null;
  

  // Function to view project details
  onViewProject(project: any): void {
    this.selectedProject = project;
    this.mode = 'view';
    this.showModal = true;
  }

  // Function to edit project details
  onEditProject(project: any): void {
    this.selectedProject = { ...project }; // Create a copy to avoid direct editing
    this.mode = 'edit';
    this.showModal = true;
  }

  // Function to save edited project
  onSaveEdit(): void {
    const index = this.projects.findIndex((p) => p.projectName === this.selectedProject.projectName);
    if (index > -1) {
      this.projects[index] = { ...this.selectedProject };
      alert(`Project ${this.selectedProject.projectName} updated successfully.`);
    }
    this.closeModal();
  }

  // Function to delete a project
  onDeleteProject(project: any): void {
    const confirmed = confirm(`Are you sure you want to delete project: ${project.projectName}?`);
    if (confirmed) {
      this.projects = this.projects.filter((p) => p !== project);
      alert(`Project ${project.projectName} deleted successfully.`);
    }
  }

  // Function to close the modal
  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
    this.mode = null;
  }
}
