import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from '../../core/services/base-component.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent extends BaseComponentService implements OnInit {
  constructor(){super()}
  ngOnInit(): void {
    console.log("addming admin");
  }

}
