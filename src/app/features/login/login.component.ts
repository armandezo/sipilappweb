import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  isBrowser: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
    // Verificar si estamos en el entorno del navegador
    this.isBrowser = typeof window !== 'undefined';
  }

  login() {
    this.isLoading = true;
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        this.errorMessage = '';

        // Verificar si estamos en el navegador antes de usar localStorage
        if (this.isBrowser) {
          localStorage.setItem('name', response.name);
          localStorage.setItem('lastname', response.lastname);
        }

        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error en el inicio de sesión';
        console.error('Error en el login:', error);
        this.isLoading = false;
      }
    });
  }
}
