import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdMemberScreenComponent } from './household-member-screen.component';

describe('HouseholdMemberScreenComponent', () => {
  let component: HouseholdMemberScreenComponent;
  let fixture: ComponentFixture<HouseholdMemberScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdMemberScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdMemberScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
