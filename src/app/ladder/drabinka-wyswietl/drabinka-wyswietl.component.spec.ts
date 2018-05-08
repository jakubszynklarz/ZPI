import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrabinkaWyswietlComponent } from './drabinka-wyswietl.component';

describe('DrabinkaWyswietlComponent', () => {
  let component: DrabinkaWyswietlComponent;
  let fixture: ComponentFixture<DrabinkaWyswietlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrabinkaWyswietlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrabinkaWyswietlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
