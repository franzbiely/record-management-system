import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAccountsScreenComponent } from './import-accounts-screen.component';

describe('ImportAccountsScreenComponent', () => {
  let component: ImportAccountsScreenComponent;
  let fixture: ComponentFixture<ImportAccountsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAccountsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAccountsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
