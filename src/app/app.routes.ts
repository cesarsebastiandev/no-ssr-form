import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];
