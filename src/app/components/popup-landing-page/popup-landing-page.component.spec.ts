import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLandingPageComponent } from './popup-landing-page.component';

describe('PopupLandingPageComponent', () => {
  let component: PopupLandingPageComponent;
  let fixture: ComponentFixture<PopupLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
