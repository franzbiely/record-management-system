import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownActionSimulationComponent } from './dropdown-action-simulation.component';

describe('DropdownActionSimulationComponent', () => {
  let component: DropdownActionSimulationComponent;
  let fixture: ComponentFixture<DropdownActionSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownActionSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownActionSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
