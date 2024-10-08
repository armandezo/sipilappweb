import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox-acto-inseguro',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './inbox-acto-inseguro.component.html',
  styleUrl: './inbox-acto-inseguro.component.css'
})
export class InboxActoInseguroComponent {
  constructor(private router: Router) {}
  navigateToConsultarActoInseguro() {
    this.router.navigate(['/consultar-acto-inseguro']);
  }
}
