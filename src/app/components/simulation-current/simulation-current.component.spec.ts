import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCurrentComponent } from './simulation-current.component';

describe('SimulationCurrentComponent', () => {
  let component: SimulationCurrentComponent;
  let fixture: ComponentFixture<SimulationCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
