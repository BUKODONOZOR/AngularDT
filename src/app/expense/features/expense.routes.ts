import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./expense-list/expense-list.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./expense-form/expense-form.component'),
  },
  {
    path: 'edit/:idTask',
    loadComponent: () => import('./expense-form/expense-form.component'),
  },
] as Routes;
