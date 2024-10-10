import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../features/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isAuthenticated(): boolean {
    // Verificar si estamos en el entorno del navegador antes de usar localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token;
    }

    // Si estamos en el servidor (sin acceso a localStorage), no se considera autenticado
    return false;
  }
}
