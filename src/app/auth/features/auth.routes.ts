import {Routes} from '@angular/router';

export default [
    {
        path: 'signin',
        loadComponent: () => import('./signin/signin.component'),
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component'),
    },
] as Routes