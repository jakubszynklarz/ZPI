import { TestBed, inject } from '@angular/core/testing';

import { ZarzadService } from './zarzad.service';

describe('ZarzadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZarzadService]
    });
  });

  it('should be created', inject([ZarzadService], (service: ZarzadService) => {
    expect(service).toBeTruthy();
  }));
});
