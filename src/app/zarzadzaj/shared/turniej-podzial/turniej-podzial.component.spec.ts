import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurniejPodzialComponent } from './turniej-podzial.component';

describe('TurniejPodzialComponent', () => {
  let component: TurniejPodzialComponent;
  let fixture: ComponentFixture<TurniejPodzialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurniejPodzialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurniejPodzialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
