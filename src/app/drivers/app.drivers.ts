import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component ({
  selector: 'drivers',
  templateUrl: './app.drivers.html',
  styleUrls: ['./app.drivers.css']
})

export class AppDriversComponent implements OnInit {
  drivers: any = [];

  constructor(private appDriversService: AppService) { }

  ngOnInit() {
    console.log('Searching data in database');
    this.appDriversService.getDriversData().subscribe(data => {
      this.drivers = data;
    });
  }
}
