import { Injectable, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject, takeUntil } from 'rxjs';

@Injectable()
export class BaseComponentService implements OnDestroy {

  private _destroy$ = new Subject<void>();
  constructor() { }
  takeUntilDestroyed<T>(): MonoTypeOperatorFunction<T> {
    return takeUntil<T>(this._destroy$);
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
