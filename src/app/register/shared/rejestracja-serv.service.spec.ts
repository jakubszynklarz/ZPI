import { TestBed, inject } from '@angular/core/testing';

import { RejestracjaServService } from './rejestracja-serv.service';

describe('RejestracjaServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RejestracjaServService]
    });
  });

  it('should be created', inject([RejestracjaServService], (service: RejestracjaServService) => {
    expect(service).toBeTruthy();
  }));
});
