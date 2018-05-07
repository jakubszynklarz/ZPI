import { TestBed, inject } from '@angular/core/testing';

import { LadderService } from './ladder.service';

describe('LadderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LadderService]
    });
  });

  it('should be created', inject([LadderService], (service: LadderService) => {
    expect(service).toBeTruthy();
  }));
});
