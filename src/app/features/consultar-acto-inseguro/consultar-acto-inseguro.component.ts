import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-acto-inseguro',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './consultar-acto-inseguro.component.html',
  styleUrl: './consultar-acto-inseguro.component.css'
})
export class ConsultarActoInseguroComponent implements OnInit {
  detalle: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.detalle = history.state.data;
    console.log("Detalle recibido:", this.detalle);
  }
  navigateToConsultarActoInseguro() {
    this.router.navigate(['/consultar-acto-inseguro']);
  }
}
