import { TestBed, inject } from '@angular/core/testing';

import { KontaktServService } from './kontakt-serv.service';

describe('KontaktServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontaktServService]
    });
  });

  it('should be created', inject([KontaktServService], (service: KontaktServService) => {
    expect(service).toBeTruthy();
  }));
});
