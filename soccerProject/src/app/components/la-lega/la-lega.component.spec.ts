import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLegaComponent } from './la-lega.component';

describe('LaLegaComponent', () => {
  let component: LaLegaComponent;
  let fixture: ComponentFixture<LaLegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
