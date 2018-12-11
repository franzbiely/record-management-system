import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLandingPageScreenComponent } from './popup-landing-page-screen.component';

describe('PopupLandingPageScreenComponent', () => {
  let component: PopupLandingPageScreenComponent;
  let fixture: ComponentFixture<PopupLandingPageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLandingPageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLandingPageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
