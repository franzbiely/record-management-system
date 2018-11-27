import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRotateScreenComponent } from './pop-up-rotate-screen.component';

describe('PopUpRotateScreenComponent', () => {
  let component: PopUpRotateScreenComponent;
  let fixture: ComponentFixture<PopUpRotateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpRotateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRotateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
