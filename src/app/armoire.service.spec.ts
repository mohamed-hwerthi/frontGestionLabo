import { TestBed } from '@angular/core/testing';

import { ArmoireService } from './gestionservice';

describe('ArmoireService', () => {
  let service: ArmoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
