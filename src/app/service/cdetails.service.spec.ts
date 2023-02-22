import { TestBed } from '@angular/core/testing';

import { CDetailsService } from './cdetails.service';

describe('CDetailsService', () => {
  let service: CDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
