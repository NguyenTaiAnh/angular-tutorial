import { Component, Input } from '@angular/core';
interface Novel {
  name: string;
  author: string;
  lastChapter: number;
  updateDate: Date;
  lastUpdateDate?: string; // Make it optional if not all novels have this property
  coverImage: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() novel!: Novel;
  @Input() type!: string;
  
}
