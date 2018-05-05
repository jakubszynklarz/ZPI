import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurniejDetailsComponent } from './turniej-details.component';

describe('TurniejDetailsComponent', () => {
  let component: TurniejDetailsComponent;
  let fixture: ComponentFixture<TurniejDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurniejDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurniejDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
