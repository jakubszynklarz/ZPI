import { TestBed, inject } from '@angular/core/testing';
import { TurniejService } from '../../shared/turniej.service';



describe('TurniejService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurniejService]
    });
  });

  it('should be created', inject([TurniejService], (service: TurniejService) => {
    expect(service).toBeTruthy();
  }));
});
