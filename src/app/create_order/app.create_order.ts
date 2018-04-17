import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAlertService } from '../services/app.alert.service';
import { AppStatementService } from '../services/app.statement.service';
import { AppUserService } from '../services/app.user.service';
import { NavbarService } from '../services/navbar.service';
import { AppClientModel } from '../models/client';

@Component ({
  selector: 'create-order',
  templateUrl: './app.create_order.html',
  styleUrls: ['./app.create_order.css', './app.createorder.less', './toggle_switch.css']
})

export class AppCreateorderComponent implements OnInit {
  model1: any = {};
  City1: any;
  City2: any;
  Office2: any;
  Office1: any;
  cities1: any = [];
  cities2: any = [];
  offices1: any = [];
  offices2: any = [];
  users: any = [];
  current_User: AppClientModel;
  condition = true;
  loading = false;

  toggle() {
    this.condition = !this.condition;
  }

  constructor(
    private shippingCity: AppService,
    private shippingOffice: AppService,
    private deliveryCity: AppService,
    private deliveryAddress: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AppAlertService,
    private orderService: AppStatementService,
    private user: AppUserService,
    public nav: NavbarService
  ) {
    this.shippingCity.getShippingCity().subscribe(data => {
      console.log('Got data of shipping_sity');
      this.cities1 = data;
    });
    this.deliveryCity.getDeliveryCity().subscribe(data => {
      console.log('Got data of delivery_city');
      this.cities2 = data;
    });
    this.user.getRecipient().subscribe(data => {
      this.users = data;
    });
    this.current_User = JSON.parse(localStorage.getItem('currentUser'));
  };

  myFunction() {
    this.shippingOffice.getShippingOffice(this.City1.city_id).subscribe(data => {
      this.offices1 = data;
    });
  }

  myFunction1() {
    this.deliveryAddress.getDeliveryAddress(this.City2.city_id).subscribe(data => {
      this.offices2 = data
    })
  }

  create_statement() {
    console.log('this.current_User', this.current_User);
    this.loading = true;
    this.orderService.createOrder(this.model1, this.current_User.client_id, this.current_User.client_first_name, this.current_User.client_last_name, this.current_User.client_phone_number)
      .subscribe(data => {
        this.model1 = data;
        alert('Заказ успешно сформирован!');
        this.router.navigate(['/']);
      },
        error => {
        this.alertService.error(error);
        this.loading = false;
      })
  }

  create_statement1() {
    this.loading = true;
    this.orderService.createOrder1(this.model1, this.current_User.client_id, this.current_User.client_first_name, this.current_User.client_last_name, this.current_User.client_phone_number)
      .subscribe(data => {
        this.model1 = data;
        alert('Заказ успешно сформирован!');
        this.router.navigate(['/']);
      },
        error => {
        this.alertService.error(error);
        this.loading = false;
      })
  }

  ngOnInit() {
    this.nav.show()
  }
}
