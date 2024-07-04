import { Component, OnInit } from '@angular/core';
import { AdminConfigService } from '../../core/services/admin/admin.config';
import { AdminTabs } from '../../core/services/admin/admin.model';
import { BaseComponentService } from '../../core/services/base-component.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent extends BaseComponentService implements OnInit {
  tabs!: AdminTabs[];

  constructor(
    private _adminConfig: AdminConfigService
  ) {
    super();
    this.tabs = _adminConfig.tabs();
    
  }

  ngOnInit(): void {
    console.log('addming admin');
  }
}
