import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Injector, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MonoTypeOperatorFunction, Subject, takeUntil } from 'rxjs';

export abstract class BaseComponent {
  protected router: Router;

  protected translateService: TranslateService;

  protected platform: Platform;

  protected cdr: ChangeDetectorRef;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translateService = injector.get(TranslateService);
    this.platform = injector.get(Platform);
    this.cdr = injector.get(ChangeDetectorRef);
  }
}
