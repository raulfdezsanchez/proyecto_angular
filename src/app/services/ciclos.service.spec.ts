import { TestBed } from '@angular/core/testing';

import { CiclosServiceService } from './ciclos.service';

describe('CiclosServiceService', () => {
  let service: CiclosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiclosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
