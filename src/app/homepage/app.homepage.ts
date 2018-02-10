import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'homepage',
  templateUrl: './app.homepage.html',
  styleUrls: ['./app.homepage.css', './app.homepage2.css']
})

export class AppHomepageComponent {
  // city: any;
  cities: any[] = [];
  defaultOffices: any[] = [];
  // offices: any[] = [];
  // Office: any;

/*  myFunction() {
    this.offices = this.offices.filter(office => {
      return office.city_id === this.city.city_id;
    });
    console.log(this.Office);
  }*/

  constructor(private AppCityService: AppService, private AppOfficeService: AppService) {
    this.AppCityService.getCityData().subscribe(data => {
      this.cities = data;
    });
    this.AppOfficeService.getOfficeData().subscribe(data => {
      this.defaultOffices = data;
      // this.offices = data;
    });
  };
}
