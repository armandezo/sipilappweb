import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = 'SISTEMA DE IDENTIFICACIÓN DE POTENCIALES INCIDENTES LABORALES';
  @Input() logoUrl: string = 'ruta-de-imagen-logo-generica';
  @Input() headerImageUrl: string = 'ruta-de-imagen-generica';
}
