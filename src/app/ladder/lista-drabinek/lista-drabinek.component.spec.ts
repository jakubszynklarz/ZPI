import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDrabinekComponent } from './lista-drabinek.component';

describe('ListaDrabinekComponent', () => {
  let component: ListaDrabinekComponent;
  let fixture: ComponentFixture<ListaDrabinekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDrabinekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDrabinekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
