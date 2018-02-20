import { Component, OnInit } from '@angular/core';
import { AppAlertService } from '../services/app.alert.service';

@Component({
  selector: 'alert',
  templateUrl: './app.alert.html'
})

export class AppAlertComponent implements OnInit {
  message: any;

  constructor(private alertService: AppAlertService) {}

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {this.message = message});
  }
}
