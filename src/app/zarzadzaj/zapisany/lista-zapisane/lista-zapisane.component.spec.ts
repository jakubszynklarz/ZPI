import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZapisaneComponent } from './lista-zapisane.component';

describe('ListaZapisaneComponent', () => {
  let component: ListaZapisaneComponent;
  let fixture: ComponentFixture<ListaZapisaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZapisaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZapisaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
