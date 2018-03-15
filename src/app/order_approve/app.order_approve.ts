import { Component, OnInit } from '@angular/core';
import { AppStatementService } from '../services/app.statement.service';

@Component ({
  selector: 'order-approve',
  templateUrl: './app.order_approve.html',
  styleUrls: ['./app.order_approve.css', './button.scss', './button1.scss']
})

export class AppOrderApproveComponent implements OnInit {
  orders: any = [];

  constructor(private order: AppStatementService) {  }

  ngOnInit() {
    this.order.getOrderData().subscribe(data => {
      this.orders = data
    })
  }
}
