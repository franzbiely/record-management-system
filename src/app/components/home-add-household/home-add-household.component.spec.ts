import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddHouseholdComponent } from './home-add-household.component';

describe('HomeAddHouseholdComponent', () => {
  let component: HomeAddHouseholdComponent;
  let fixture: ComponentFixture<HomeAddHouseholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddHouseholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
