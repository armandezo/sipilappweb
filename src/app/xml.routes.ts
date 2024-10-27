import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { InboxActoInseguroComponent } from './features/inbox-acto-inseguro/inbox-acto-inseguro.component';
import { ConsultarActoInseguroComponent } from './features/consultar-acto-inseguro/consultar-acto-inseguro.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'inbox-acto-inseguro', component: InboxActoInseguroComponent },
  { path: 'consultar-acto-inseguro', component: ConsultarActoInseguroComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
