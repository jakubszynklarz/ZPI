import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyevenComponent } from './myeven.component';

describe('MyevenComponent', () => {
  let component: MyevenComponent;
  let fixture: ComponentFixture<MyevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
