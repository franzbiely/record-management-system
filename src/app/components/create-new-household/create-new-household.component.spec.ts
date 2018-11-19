import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewHouseholdComponent } from './create-new-household.component';

describe('CreateNewHouseholdComponent', () => {
  let component: CreateNewHouseholdComponent;
  let fixture: ComponentFixture<CreateNewHouseholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewHouseholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
