import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRotateComponent } from './pop-up-rotate.component';

describe('PopUpRotateComponent', () => {
  let component: PopUpRotateComponent;
  let fixture: ComponentFixture<PopUpRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
