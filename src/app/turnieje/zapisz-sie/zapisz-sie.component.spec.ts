import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapiszSieComponent } from './zapisz-sie.component';

describe('ZapiszSieComponent', () => {
  let component: ZapiszSieComponent;
  let fixture: ComponentFixture<ZapiszSieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapiszSieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapiszSieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
