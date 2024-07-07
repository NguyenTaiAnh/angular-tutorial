import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AdminConfigService } from '../../core/services/admin/admin.config';
import { AdminTabs } from '../../core/services/admin/admin.model';
import { LanguageService } from '../../core/services/languege.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  tabs!: AdminTabs[];
  //  constructor(private languageService: LanguageService, private translate: TranslateService) {}

  constructor(
    private _adminConfig: AdminConfigService,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.tabs = _adminConfig.tabs();
  }

  ngOnInit(): void {
    console.log('addming admin', this.translate);
  }
}
