import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdListScreenComponent } from './household-list-screen.component';

describe('HouseholdListScreenComponent', () => {
  let component: HouseholdListScreenComponent;
  let fixture: ComponentFixture<HouseholdListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
