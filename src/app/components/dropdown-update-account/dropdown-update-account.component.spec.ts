import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUpdateAccountComponent } from './dropdown-update-account.component';

describe('DropdownUpdateAccountComponent', () => {
  let component: DropdownUpdateAccountComponent;
  let fixture: ComponentFixture<DropdownUpdateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownUpdateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUpdateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
