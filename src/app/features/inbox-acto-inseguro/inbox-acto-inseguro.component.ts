import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InboxActoInseguroService } from './services/inbox-acto-inseguro.service';

@Component({
  selector: 'app-inbox-acto-inseguro',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './inbox-acto-inseguro.component.html',
  styleUrl: './inbox-acto-inseguro.component.css'
})
export class InboxActoInseguroComponent {
  filtro = {
    companyName: '',
    username: '',
    dni: '',
    area: '',
    fromDate: '',
    toDate: '',
    type: '',
    status:  '',
    location: ''
  };
  resultados: any[] = [];
  errorMessage = '';
  isLoading = false;
  constructor(private router: Router, private inboxService: InboxActoInseguroService) {}

  buscar() {
    this.isLoading = true;
    this.inboxService.buscarActosCondicionesInseguras(this.filtro).subscribe({
      next: (data) => {
        this.resultados = data.data;
        this.isLoading = false;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error en la búsqueda';
        this.isLoading = false;
      },
    });
  }

  cancelar() {
    this.filtro = {
      companyName: '',
      username: '',
      dni: '',
      area: '',
      fromDate: '',
      toDate: '',
      type: '',
      status: '',
      location: ''
    };

    this.resultados = [];
    this.errorMessage = '';
  }

  formValid() {
    return this.filtro.type !== '' && this.filtro.status !== '';
  }
  navigateToConsultarActoInseguro(detalle: any) {
    this.router.navigate(['/consultar-acto-inseguro'], {
      state: { data: detalle }
    });
  }

}
