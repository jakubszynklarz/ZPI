import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurniejiComponent } from './lista-turnieji.component';

describe('ListaTurniejiComponent', () => {
  let component: ListaTurniejiComponent;
  let fixture: ComponentFixture<ListaTurniejiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTurniejiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTurniejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
