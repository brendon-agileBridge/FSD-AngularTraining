import { Routes } from '@angular/router';
import {HomePage} from "./pages/home/home.component";
import {TotalsPage} from "./pages/totals/totals.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'totals',
    component: TotalsPage
  }
];
