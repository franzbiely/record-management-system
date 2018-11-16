import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddHouseholdScreenComponent } from './home-add-household-screen.component';

describe('HomeAddHouseholdScreenComponent', () => {
  let component: HomeAddHouseholdScreenComponent;
  let fixture: ComponentFixture<HomeAddHouseholdScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddHouseholdScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddHouseholdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
