import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  fullName: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const name = localStorage.getItem('name') || '';
    const lastname = localStorage.getItem('lastname') || '';
    this.fullName = `${name} ${lastname}`;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    this.router.navigate(['/login']);
  }

  navigateToInboxActoInseguro() {
    this.router.navigate(['/inbox-acto-inseguro']);
  }
}
