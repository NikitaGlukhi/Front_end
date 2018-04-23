import { Component } from '@angular/core';
import { AppAlertService } from '../services/app.alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStatementService } from '../services/app.statement.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'admin-order-creation',
  templateUrl: './create_order(admin).html',
  styleUrls: ['./create_order(admin).css']
})

export class AppCreateOrderAdminComponent {
  model2: any = {};
  model7: any = {};
  model10: any = {};
  City3: any;
  cities3: any = [];
  offices3: any = [];
  City4: any;
  cities4: any = [];
  offices4: any = [];
  loading = false;

  constructor(private shippingCity: AppService,
              private shippingAddress: AppService,
              private deliveryCity: AppService,
              private deliveryAddress: AppService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AppAlertService,
              private orderService: AppStatementService
  ) {
    this.shippingCity.getShippingCity().subscribe(data => {
      console.log('Got data of shipping_sity');
      this.cities3 = data;
    });
    this.deliveryCity.getDeliveryCity().subscribe(data => {
      console.log('Got data of delivery_city');
      this.cities4 = data;
    });
  }

  myFunction() {
    this.shippingAddress.getShippingOffice(this.City3.city_id).subscribe(data => {
      this.offices3 = data;
    })
  }

  myFunction1() {
    this.deliveryAddress.getDeliveryAddress(this.City4.city_id).subscribe(data => {
      this.offices4 = data
    })
  }

  create_order() {
    this.loading = true;
    this.orderService.createOrder2({sender: this.model7, recipient: this.model10, order2: this.model2}).subscribe(data => {
      this.model7 = data;
      alert('Заказ сформирован!');
      this.router.navigate(['/']);
    },
      error => {
      this.alertService.error(error);
      this.loading = false;
      });
  }
}
