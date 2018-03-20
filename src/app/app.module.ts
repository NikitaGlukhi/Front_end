import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component/app.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routing';
import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreateorderComponent } from './create_order/app.create_order';
import { AppOrderApproveComponent } from './order_approve/app.order_approve';
import { AppService } from './services/app.service';
import { NotFoundComponent } from './not_found_component/not_found';
import { AppAlertComponent } from './alert/app.alert.component';
import { AppAlertService } from './services/app.alert.service';
import { AppUserService } from './services/app.user.service';
import { AppAuthService } from './services/app.auth.service';
import { AuthGuard } from './guard/auth.guard';
import { AppAuthenticationComponent } from './authentication/app.authentication';
import { AuthErrorComponent } from './auth_error_component/auth_error';
import { AppProfileComponent } from './profile/app.profile';
import { AppUsersComponent } from './users/app.users';
import { AppStatementService } from './services/app.statement.service';
import { AppModerComponent } from './moder_create/app.moder';

@NgModule({
  declarations: [
    AppComponent,
    AppHomepageComponent,
    AppDriversComponent,
    AppCreateorderComponent,
    AppOrderApproveComponent,
    AppAlertComponent,
    AppAuthenticationComponent,
    AppProfileComponent,
    AppUsersComponent,
    AppModerComponent,
    AuthErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( route )
  ],
  providers: [
    AuthGuard,
    AppService,
    AppAlertService,
    AppUserService,
    AppAuthService,
    AppStatementService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
