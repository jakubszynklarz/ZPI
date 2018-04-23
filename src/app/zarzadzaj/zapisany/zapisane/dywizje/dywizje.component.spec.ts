import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DywizjeComponent } from './dywizje.component';

describe('DywizjeComponent', () => {
  let component: DywizjeComponent;
  let fixture: ComponentFixture<DywizjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DywizjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DywizjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
