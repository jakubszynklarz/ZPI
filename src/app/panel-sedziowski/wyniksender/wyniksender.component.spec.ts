import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyniksenderComponent } from './wyniksender.component';

describe('WyniksenderComponent', () => {
  let component: WyniksenderComponent;
  let fixture: ComponentFixture<WyniksenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyniksenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyniksenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
