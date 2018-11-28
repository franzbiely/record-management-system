import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectModalScreenComponent } from './account-select-modal-screen.component';

describe('AccountSelectModalScreenComponent', () => {
  let component: AccountSelectModalScreenComponent;
  let fixture: ComponentFixture<AccountSelectModalScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelectModalScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectModalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
