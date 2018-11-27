import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHouseholdScreenComponent } from './create-household-screen.component';

describe('CreateHouseholdScreenComponent', () => {
  let component: CreateHouseholdScreenComponent;
  let fixture: ComponentFixture<CreateHouseholdScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHouseholdScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHouseholdScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
