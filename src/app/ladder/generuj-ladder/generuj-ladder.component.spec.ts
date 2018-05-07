import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerujLadderComponent } from './generuj-ladder.component';

describe('GenerujLadderComponent', () => {
  let component: GenerujLadderComponent;
  let fixture: ComponentFixture<GenerujLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerujLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerujLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
