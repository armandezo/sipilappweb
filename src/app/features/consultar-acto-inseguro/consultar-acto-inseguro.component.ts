import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-consultar-acto-inseguro',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './consultar-acto-inseguro.component.html',
  styleUrl: './consultar-acto-inseguro.component.css'
})
export class ConsultarActoInseguroComponent implements OnInit {
  detalle: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inyección de platformId para verificar si estamos en el navegador
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Este bloque solo se ejecuta en el navegador
      if (history.state && history.state.data) {
        this.detalle = history.state.data;
        console.log("Detalle recibido:", this.detalle);
      } else {
        console.log("No hay datos en el estado de history.");
        this.detalle = {};  // Valor por defecto o manejo de ausencia de datos
      }
    } else {
      console.log("SSR: No hay acceso a 'history' en el servidor");
    }
  }


  navigateToConsultarActoInseguro() {
    this.router.navigate(['/consultar-acto-inseguro']);
  }
}
