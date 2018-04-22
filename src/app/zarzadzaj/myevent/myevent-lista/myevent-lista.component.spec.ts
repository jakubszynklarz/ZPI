import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventListaComponent } from './myevent-lista.component';

describe('MyeventListaComponent', () => {
  let component: MyeventListaComponent;
  let fixture: ComponentFixture<MyeventListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyeventListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
