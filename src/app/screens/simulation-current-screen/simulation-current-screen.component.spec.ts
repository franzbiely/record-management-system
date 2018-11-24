import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCurrentScreenComponent } from './simulation-current-screen.component';

describe('SimulationCurrentScreenComponent', () => {
  let component: SimulationCurrentScreenComponent;
  let fixture: ComponentFixture<SimulationCurrentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationCurrentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCurrentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
