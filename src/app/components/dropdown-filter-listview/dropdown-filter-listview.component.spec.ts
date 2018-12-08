import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFilterListviewComponent } from './dropdown-filter-listview.component';

describe('DropdownFilterListviewComponent', () => {
  let component: DropdownFilterListviewComponent;
  let fixture: ComponentFixture<DropdownFilterListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownFilterListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFilterListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
