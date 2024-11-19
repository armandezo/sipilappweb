import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from 'express';

@Component({
  selector: 'app-consultar-accion-correctiva',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './consultar-accion-correctiva.component.html',
  styleUrl: './consultar-accion-correctiva.component.css',
})
export class ConsultarAccionCorrectivaComponent {
  filtro = {
    companyName: '',
    username: '',
    dni: '',
    area: '',
    fromDate: '',
    toDate: '',
    type: '',
    status: '',
    location: '',
  };
  resultados: any[] = [];
  errorMessage = '';
  isLoading = false;

  constructor() {}

  buscar() {
    this.isLoading = true;
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
      location: '',
    };

    this.resultados = [];
    this.errorMessage = '';
    window.history.back();
  }

  formValid() {
    return this.filtro.type !== '' && this.filtro.status !== '';
  }
}
