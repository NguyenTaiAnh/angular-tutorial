import { Component, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

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

  constructor(
    public themeService: ThemeService,
  ){
    this.themeService.setTheme(this.themeService.getTheme());
  }

  toggleTheme(){
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
