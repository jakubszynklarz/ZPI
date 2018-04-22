import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapisanyComponent } from './zapisany.component';

describe('ZapisanyComponent', () => {
  let component: ZapisanyComponent;
  let fixture: ComponentFixture<ZapisanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapisanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapisanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
