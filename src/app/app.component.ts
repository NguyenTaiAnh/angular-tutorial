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

  listUsers: User[] = [];
  isCollapsed = false;
  listMenu = [
    {
      name: "Home",
      url:"/home",
      isLast: false,
      nzType: "home"
    },
    {
      name: "Categories",
      url:"/categories",
      isLast: false,
      nzType: "database"
    },
    {
      name: "Favorite",
      url:"/favorite",
      isLast: false,
      nzType: "star"
    },
    {
      name: "History",
      url:"/history",
      isLast: false,
      nzType: "history"
    },
    {
      name: "profile",
      url:"/profile",
      isLast: true,
      nzType: "user"
    },
    {
      name: "admin",
      url:"/admin",
      isLast: true,
      nzType: "dashboard"
    },
    {
      name: "Login",
      url:"/login",
      isLast: true,
      nzType: "login"
    },
  ]
  constructor(
    public themeService: ThemeService,
  ){
    this.themeService.setTheme(this.themeService.getTheme());
    for(let i = 0; i < 10; i++){
      let user = {
        name: this.user.name + i,
        age: this.user.age + i,
      }
      this.listUsers.push(user)
    }
  }

  toggleTheme(){
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
