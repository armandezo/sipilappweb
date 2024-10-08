import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class ConsultarActoInseguroComponent {
  constructor(private router: Router) {}
  navigateToConsultarActoInseguro() {
    this.router.navigate(['/consultar-acto-inseguro']);
  }
}
