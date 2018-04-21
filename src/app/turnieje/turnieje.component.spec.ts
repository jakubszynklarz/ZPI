import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurniejeComponent } from './turnieje.component';

describe('TurniejeComponent', () => {
  let component: TurniejeComponent;
  let fixture: ComponentFixture<TurniejeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurniejeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurniejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
