import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapisaneComponent } from './zapisane.component';

describe('ZapisaneComponent', () => {
  let component: ZapisaneComponent;
  let fixture: ComponentFixture<ZapisaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapisaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapisaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
