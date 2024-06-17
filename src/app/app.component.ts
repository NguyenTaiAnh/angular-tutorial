import { Component, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

export interface User{
  name:string;
  age:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = VERSION.full;
  user: User = {
    name: "Anh Dev",
    age: 18
  };

}
