import { Component, OnInit } from '@angular/core';
import { AppStatementService } from '../services/app.statement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component ({
  selector: 'order-approve',
  templateUrl: './app.order_approve.html',
  styleUrls: ['./app.order_approve.css', './button.scss', './button1.scss']
})

export class AppOrderApproveComponent implements OnInit {
  orders: any = [];

  constructor(private order: AppStatementService, private route: ActivatedRoute, private router: Router, public nav: NavbarService) {  }

  ngOnInit() {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.order.getOrderData().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    })
  }

  orderApprove(id) {
    this.order.approveOrder(id).subscribe(data => {
      this.orders = data;
      this.router.navigate(['/order-approve']);
      window.location.reload();
    })
  }

  orderRefuse(id) {
    this.order.refuseOrder(id).subscribe(data => {
      this.orders = data;
      this.router.navigate(['/order-approve']);
      window.location.reload();
    })
  }
}
