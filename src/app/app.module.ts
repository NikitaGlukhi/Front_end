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
import { AppService } from './app.service';
import { NotFoundComponent } from './not_found_component/not_found';
import { CallbackComponent } from './callback/app.callback';
import { AuthService } from './auth/app.auth.service';
import { AuthGuard } from './auth/app.auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AppHomepageComponent,
    AppDriversComponent,
    AppCreate_orderModule,
    AppOrder_approveModule,
    CallbackComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( route )
  ],
  providers: [ AppService, AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
