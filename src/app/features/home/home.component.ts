import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  firstName = "Home"
  reciveObject(e: any) {
    console.log("Recive object", e);
  }
  reciveArray(e: any) {
    console.log("Recive array", e);
  }
  reciveString(e: any) {
    console.log("Recive string", e);
  }
}
