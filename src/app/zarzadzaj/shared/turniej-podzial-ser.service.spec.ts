import { TestBed, inject } from '@angular/core/testing';

import { TurniejPodzialSerService } from './turniej-podzial-ser.service';

describe('TurniejPodzialSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurniejPodzialSerService]
    });
  });

  it('should be created', inject([TurniejPodzialSerService], (service: TurniejPodzialSerService) => {
    expect(service).toBeTruthy();
  }));
});
