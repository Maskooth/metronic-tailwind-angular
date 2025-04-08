import { TestBed } from '@angular/core/testing';

import { SharedFunctionesService } from './shared-functiones.service';

describe('SharedFunctionesService', () => {
  let service: SharedFunctionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedFunctionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
