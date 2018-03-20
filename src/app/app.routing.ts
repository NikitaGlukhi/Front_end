import { Routes } from '@angular/router';

import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreateorderComponent } from './create_order/app.create_order';
import { AppOrderApproveComponent } from './order_approve/app.order_approve';
import { NotFoundComponent } from './not_found_component/not_found';
import { AuthGuard } from './guard/auth.guard';
import { AppAuthenticationComponent } from './authentication/app.authentication';
import { AuthErrorComponent } from './auth_error_component/auth_error';
import { AppProfileComponent } from './profile/app.profile';
import { AppUsersComponent } from './users/app.users';
import { AppModerComponent } from './moder_create/app.moder';

export const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'authentication' },
  { path: 'authentication', component: AppAuthenticationComponent },
  { path: 'homepage', component: AppHomepageComponent },
  { path: 'create-order', component: AppCreateorderComponent, canActivate: [AuthGuard] },
  { path: 'drivers', component: AppDriversComponent },
  { path: 'order-approve', component: AppOrderApproveComponent, canActivate: [AuthGuard] },
  { path: 'users', component: AppUsersComponent },
  { path: 'moder-creation', component: AppModerComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: AppProfileComponent, canActivate: [AuthGuard] },
  { path: 'authentication-error', component: AuthErrorComponent },
  { path: '**', component: NotFoundComponent }
];
