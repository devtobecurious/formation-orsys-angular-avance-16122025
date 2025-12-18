import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'wookiees',
        loadChildren: () => import('./features/wookiees/wookiees.routes').then(m => m.wookieesRoutes)
    }
];
