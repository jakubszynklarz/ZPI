import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSedziowskiComponent } from './panel-sedziowski.component';

describe('PanelSedziowskiComponent', () => {
  let component: PanelSedziowskiComponent;
  let fixture: ComponentFixture<PanelSedziowskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSedziowskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSedziowskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
