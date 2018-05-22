import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaWynikiOnlineComponent } from './lista-wyniki-online.component';

describe('ListaWynikiOnlineComponent', () => {
  let component: ListaWynikiOnlineComponent;
  let fixture: ComponentFixture<ListaWynikiOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaWynikiOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaWynikiOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
