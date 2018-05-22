import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPytanComponent } from './lista-pytan.component';

describe('ListaPytanComponent', () => {
  let component: ListaPytanComponent;
  let fixture: ComponentFixture<ListaPytanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPytanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPytanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
