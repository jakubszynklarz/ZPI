import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRouteLinkComponent } from './non-route-link.component';

describe('NonRouteLinkComponent', () => {
  let component: NonRouteLinkComponent;
  let fixture: ComponentFixture<NonRouteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRouteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRouteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
