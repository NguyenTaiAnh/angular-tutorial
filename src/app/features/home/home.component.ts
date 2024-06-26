import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CardComponent } from '../../UI/card/card.component';

export interface User {
  name: string;
  age: number;
}
interface Novel {
  name: string;
  author: string;
  lastChapter: number;
  updateDate: Date;
  lastUpdateDate?: string; // Make it optional if not all novels have this property
  coverImage: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren(CardComponent) list!: QueryList<CardComponent>
  @ViewChild("story") story!: CardComponent
  novels:Novel ={
    name: 'Title 1',
    author: "John",
    lastChapter: 100,
    updateDate: new Date(),
    coverImage: "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
  }
  listNovels: Novel[] = [];
  constructor(){
    for(let i = 0; i < 10; i++){
      let novel = {
        name: this.novels.name + i,
        author: this.novels.author + i,
        lastChapter: this.novels.lastChapter + i,
        updateDate: new Date(),
        coverImage: "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
      }
      this.listNovels.push(novel)
    }
  }
  ngAfterViewInit(): void {
    console.log(this.list);
    // this.productItems.changes.subscribe(() => this.calculateTotalPrice());
    this.list.changes.subscribe(i => console.log(i))
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
  clickDetail(){
    this.story.detail()
  }
}
