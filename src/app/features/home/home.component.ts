import { Component } from '@angular/core';

export interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user: User = {
    name: "Anh Dev",
    age: 18
  };

  listUsers: User[] = [];
  constructor(){
    for(let i = 0; i < 10; i++){
      let user = {
        name: this.user.name + i,
        age: this.user.age + i,
      }
      this.listUsers.push(user)
    }
  }
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
  reciveFn(e: any) {
    console.log("Recive function", e);
  }
}
