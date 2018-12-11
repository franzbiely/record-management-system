import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownActionsListviewComponent } from './dropdown-actions-listview.component';

describe('DropdownActionsListviewComponent', () => {
  let component: DropdownActionsListviewComponent;
  let fixture: ComponentFixture<DropdownActionsListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownActionsListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownActionsListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
