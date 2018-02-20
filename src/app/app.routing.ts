import { Routes } from '@angular/router';

import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreate_orderModule } from './create_order/app.create_order';
import { AppOrder_approveModule } from './order_approve/app.order_approve';
import { AppRegisterComponent } from './register/app.register.component';
import { NotFoundComponent } from './not_found_component/not_found';
import { AppLoginComponent } from './login/app.login.component';
import { AuthGuard } from './guard/auth.guard';

export const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: AppHomepageComponent },
  { path: 'create-order', component: AppCreate_orderModule },
  { path: 'drivers', component: AppDriversComponent },
  { path: 'order-approve', component: AppOrder_approveModule, canActivate: [AuthGuard] },
  { path: 'register', component: AppRegisterComponent },
  { path: 'login', component: AppLoginComponent },
  { path: '**', component: NotFoundComponent }
];
