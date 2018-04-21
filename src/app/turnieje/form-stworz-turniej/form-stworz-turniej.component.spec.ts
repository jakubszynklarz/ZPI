import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStworzTurniejComponent } from './form-stworz-turniej.component';

describe('FormStworzTurniejComponent', () => {
  let component: FormStworzTurniejComponent;
  let fixture: ComponentFixture<FormStworzTurniejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStworzTurniejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStworzTurniejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
