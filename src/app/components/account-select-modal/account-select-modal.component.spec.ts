import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectModalComponent } from './account-select-modal.component';

describe('AccountSelectModalComponent', () => {
  let component: AccountSelectModalComponent;
  let fixture: ComponentFixture<AccountSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
