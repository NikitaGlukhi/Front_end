import { Component } from '@angular/core';


@Component ({
  selector: 'create-order',
  templateUrl: './app.create_order.html',
  styleUrls: ['./app.create_order.css', './app.createorder.less']
})

export class AppCreate_orderModule {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
