import { Routes } from "@angular/router";
import { DisplayListWookiees } from "./components/display-list-wookiees/display-list-wookiees";
import { AddWookiee } from "./components/add-wookiee/add-wookiee";

export const wookieesRoutes: Routes = [
    { 
        path: '',
        component: DisplayListWookiees
    },
    {
        path: 'add',
        loadComponent: () => import('./components/add-wookiee/add-wookiee').then(m => m.AddWookiee)
    }
];