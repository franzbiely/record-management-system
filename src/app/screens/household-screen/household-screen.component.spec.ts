import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdScreenComponent } from './household-screen.component';

describe('HouseholdScreenComponent', () => {
  let component: HouseholdScreenComponent;
  let fixture: ComponentFixture<HouseholdScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
