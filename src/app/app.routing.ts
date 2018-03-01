import { Routes } from '@angular/router';

import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreate_orderModule } from './create_order/app.create_order';
import { AppOrder_approveModule } from './order_approve/app.order_approve';
import { NotFoundComponent } from './not_found_component/not_found';
import { AuthGuard } from './guard/auth.guard';
import { AppAuthenticationComponent } from './authentication/app.authentication';

export const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: AppHomepageComponent },
  { path: 'create-order', component: AppCreate_orderModule },
  { path: 'drivers', component: AppDriversComponent },
  { path: 'order-approve', component: AppOrder_approveModule, canActivate: [AuthGuard] },
  { path: 'authentication', component: AppAuthenticationComponent },
  { path: '**', component: NotFoundComponent }
];
