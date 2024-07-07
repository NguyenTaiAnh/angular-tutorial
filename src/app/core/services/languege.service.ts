import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, zh_CN, vi_VN, NzI18nInterface } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// import zh from '@angular/common/locales/zh';
import vi from '@angular/common/locales/vi'

const enCustom: NzI18nInterface = {
  ...en_US,
  Table: {
    ...en_US.Table,
    filterTitle: 'Filter',
    filterConfirm: 'OK',
    filterReset: 'Reset'
  }
};

const viCustom: NzI18nInterface = {
  ...vi_VN,
  Table: {
    ...vi_VN.Table,
    filterTitle: 'Lọc',
    filterConfirm: 'Đồng ý',
    filterReset: 'Tải lại'
  }
};
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService, private nzI18nService: NzI18nService) {
    registerLocaleData(en);
    registerLocaleData(vi);
    this.translate.addLangs(['en-EN', 'vi-VN']);
    this.translate.setDefaultLang('en-EN');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    switch (language) {
      case 'en-EN':
        this.nzI18nService.setLocale(en_US);
        break;
      case 'vi-VN':
        this.nzI18nService.setLocale(vi_VN);
        break;
      default:
        this.nzI18nService.setLocale(vi_VN);
    }
  }
}
