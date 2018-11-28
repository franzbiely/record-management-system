import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsScreenComponent } from './account-details-screen.component';

describe('AccountDetailsScreenComponent', () => {
  let component: AccountDetailsScreenComponent;
  let fixture: ComponentFixture<AccountDetailsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
