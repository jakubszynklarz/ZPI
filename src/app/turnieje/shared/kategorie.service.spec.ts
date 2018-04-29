import { TestBed, inject } from '@angular/core/testing';

import { KategorieService } from './kategorie.service';

describe('KategorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KategorieService]
    });
  });

  it('should be created', inject([KategorieService], (service: KategorieService) => {
    expect(service).toBeTruthy();
  }));
});
