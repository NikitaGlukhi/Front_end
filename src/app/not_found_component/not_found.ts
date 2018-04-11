import { Component } from '@angular/core';
import {NavbarService} from '../services/navbar.service';

@Component({
  selector: 'not-found',
  templateUrl: './not_found_component.html',
  styleUrls: ['./not_found.scss']
})

export class NotFoundComponent {
  constructor(public nav: NavbarService) {}
}
