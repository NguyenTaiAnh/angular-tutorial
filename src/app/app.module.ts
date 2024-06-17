import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations:[AppComponent, HomeComponent],
    imports:[CommonModule,RouterOutlet, BrowserModule],
    bootstrap:[AppComponent],
})
export class AppModule {}