import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Imported custom components */
import { SideMenuComponent } from '../pages/side-menu/side-menu.component';

/* Constant used to export routes to app.module */
export const router: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: SideMenuComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
