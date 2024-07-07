import { TestBed } from '@angular/core/testing';

import { LanguegeService } from './languege.service';

describe('LanguegeService', () => {
  let service: LanguegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
