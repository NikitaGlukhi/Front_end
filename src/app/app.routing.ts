import { Routes } from '@angular/router';

import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreateorderComponent } from './create_order/app.create_order';
import { AppOrderApproveComponent } from './order_approve/app.order_approve';
import { NotFoundComponent } from './not_found_component/not_found';
import { AuthGuard } from './guard/auth.guard';
import { AuthAdminModerGuard } from './guard/auth.admin_moder.guard';
import { AuthAdminGuard } from './guard/auth.admin.guard';
import { AppAuthenticationComponent } from './authentication/app.authentication';
import { AuthErrorComponent } from './auth_error_component/auth_error';
import { AppProfileComponent } from './profile/app.profile';
import { AppUsersComponent } from './users/app.users';
import { AppModerComponent } from './moder_create/app.moder';
import { AppCreateOrderAdminComponent } from './create_order(for admin-moder)/create_order(admin)';

export const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: AppHomepageComponent },
  { path: 'authentication', component: AppAuthenticationComponent },
  { path: 'create-order', component: AppCreateorderComponent, canActivate: [AuthGuard] },
  { path: 'drivers', component: AppDriversComponent, canActivate: [AuthAdminGuard] },
  { path: 'order-approve', component: AppOrderApproveComponent, canActivate: [AuthAdminModerGuard] },
  { path: 'users', component: AppUsersComponent, canActivate: [AuthAdminGuard] },
  { path: 'moder-creation', component: AppModerComponent, canActivate: [AuthAdminGuard] },
  { path: 'profile', component: AppProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin-order-creation', component: AppCreateOrderAdminComponent, canActivate: [AuthAdminModerGuard] },
  { path: 'authentication-error', component: AuthErrorComponent },
  { path: '**', component: NotFoundComponent }
];
