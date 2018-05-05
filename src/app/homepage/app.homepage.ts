import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { AppAuthService } from '../services/app.auth.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'homepage',
  templateUrl: './app.homepage.html',
  styleUrls: ['./app.homepage.css', './app.homepage2.css', './app.text.css']
})

export class AppHomepageComponent implements OnInit {
  City: any;
  Office: any;
  cities: any = [];
  offices: any = [];

    constructor(private AppCityService: AppService, private AppOfficeService: AppService, public auth: AppAuthService, public nav: NavbarService) {
      this.AppCityService.getCityData().subscribe(data => {
        this.cities = data;
      });
    };

  myFunction() {
    this.AppOfficeService.getOfficeData(this.City.city_id).subscribe(data => {
      this.offices = data;
    });
  }

  ngOnInit() {
    this.nav.show();
    this.nav.doSomethingElseUseful();
  }
}
