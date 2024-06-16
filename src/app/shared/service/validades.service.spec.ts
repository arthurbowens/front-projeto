import { TestBed } from '@angular/core/testing';

import { ValidadesService } from './validades.service';

describe('ValidadesService', () => {
  let service: ValidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
