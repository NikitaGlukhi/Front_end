import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component/app.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routing';
import { AppDriversComponent } from './drivers/app.drivers';
import { AppHomepageComponent } from './homepage/app.homepage';
import { AppCreate_orderModule } from './create_order/app.create_order';
import { AppOrder_approveModule } from './order_approve/app.order_approve';
import { AppService } from './services/app.service';
import { NotFoundComponent } from './not_found_component/not_found';
import { AppAlertComponent } from './alert/app.alert.component';
import { AppAlertService } from './services/app.alert.service';
import { AppUserService } from './services/app.user.service';
import { AppAuthService } from './services/app.auth.service';
import { AuthGuard } from './guard/auth.guard';
import { AppAuthenticationComponent } from './authentication/app.authentication';

@NgModule({
  declarations: [
    AppComponent,
    AppHomepageComponent,
    AppDriversComponent,
    AppCreate_orderModule,
    AppOrder_approveModule,
    AppAlertComponent,
    AppAuthenticationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( route )
  ],
  providers: [ AuthGuard, AppService, AppAlertService, AppUserService, AppAuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
