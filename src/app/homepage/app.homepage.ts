import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'homepage',
  templateUrl: './app.homepage.html',
  styleUrls: ['./app.homepage.css', './app.homepage2.css', './app.text.css']
})

export class AppHomepageComponent {
  City: any;
  Office: any;
  cities: any = [];
  offices: any = [];

    constructor(private AppCityService: AppService, private AppOfficeService: AppService) {
      this.AppCityService.getCityData().subscribe(data => {
        this.cities = data;
      });
    };

  myFunction() {
    this.AppOfficeService.getOfficeData(this.City.city_id).subscribe(data => {
      this.offices = data;
    });
  }
}
