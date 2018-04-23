import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZapiszSieComponent } from './form-zapisz-sie.component';

describe('FormZapiszSieComponent', () => {
  let component: FormZapiszSieComponent;
  let fixture: ComponentFixture<FormZapiszSieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormZapiszSieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormZapiszSieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
