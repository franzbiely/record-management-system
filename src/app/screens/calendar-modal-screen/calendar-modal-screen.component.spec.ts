import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModalScreenComponent } from './calendar-modal-screen.component';

describe('CalendarModalScreenComponent', () => {
  let component: CalendarModalScreenComponent;
  let fixture: ComponentFixture<CalendarModalScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarModalScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
