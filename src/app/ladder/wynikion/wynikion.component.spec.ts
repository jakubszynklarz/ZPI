import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WynikionComponent } from './wynikion.component';

describe('WynikionComponent', () => {
  let component: WynikionComponent;
  let fixture: ComponentFixture<WynikionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WynikionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WynikionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
