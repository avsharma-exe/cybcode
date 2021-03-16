import { TestBed } from '@angular/core/testing';

import { CharInfoService } from './char-info.service';

describe('CharInfoService', () => {
  let service: CharInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
