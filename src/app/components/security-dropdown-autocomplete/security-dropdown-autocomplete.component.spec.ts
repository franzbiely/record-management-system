import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDropdownAutocompleteComponent } from './security-dropdown-autocomplete.component';

describe('SecurityDropdownAutocompleteComponent', () => {
  let component: SecurityDropdownAutocompleteComponent;
  let fixture: ComponentFixture<SecurityDropdownAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDropdownAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDropdownAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
