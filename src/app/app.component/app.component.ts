import { Component } from '@angular/core';
import { AppAuthService } from '../services/app.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
  constructor(public auth: AppAuthService) {}
}
