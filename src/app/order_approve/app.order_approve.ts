import { Component } from '@angular/core';

@Component ({
  selector: 'order-approve',
  templateUrl: './app.order_approve.html',
  styleUrls: ['./app.order_approve.css']
})

export class AppOrder_approveModule {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition
  }
}
