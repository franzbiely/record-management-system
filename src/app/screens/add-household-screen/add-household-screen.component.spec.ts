import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHouseholdScreenComponent } from './add-household-screen.component';

describe('AddHouseholdScreenComponent', () => {
  let component: AddHouseholdScreenComponent;
  let fixture: ComponentFixture<AddHouseholdScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHouseholdScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHouseholdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
