import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'expenses',
    loadComponent: () => import('./shared/ui/layout.component'),
    loadChildren: () => import('./expense/features/expense.routes'),
  },
  {
    path: '**',
    redirectTo: '/expenses',
  },
];
