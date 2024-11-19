import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  fullName: string = '';
  isBrowser: boolean = false;

  constructor(private router: Router) {
    // Verificar si estamos en el entorno del navegador
    this.isBrowser = typeof window !== 'undefined';
  }

  ngOnInit(): void {
    // Verificar si estamos en el navegador antes de usar localStorage
    if (this.isBrowser) {
      const name = localStorage.getItem('name') || '';
      const lastname = localStorage.getItem('lastname') || '';
      this.fullName = `${name} ${lastname}`;
    }
  }

  logout(): void {
    // Verificar si estamos en el navegador antes de usar localStorage
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('lastname');
    }
    this.router.navigate(['/login']);
  }

  navigateToInboxActoInseguro() {
    this.router.navigate(['/inbox-acto-inseguro']);
  }
  navigateToRegistrarAccionCorrectivaPreventiva() {
    this.router.navigate(['/registrar-accion-correctiva']);
  }
  navigateToConsultarAccionCorrectivaPreventiva() {
    this.router.navigate(['/consultar-accion-correctiva']);
  }
}
