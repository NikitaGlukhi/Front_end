import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }
}
