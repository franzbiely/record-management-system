import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountScreenComponent } from './add-account-screen.component';

describe('AddAccountScreenComponent', () => {
  let component: AddAccountScreenComponent;
  let fixture: ComponentFixture<AddAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
