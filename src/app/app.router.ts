import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Imported custom components */
import { ProductComponent } from '../pages/product/product.component';

/* Constant used to export routes to app.module */
export const router: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: ProductComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
