import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLandingDefaultComponent } from './settings-landing-default.component';

describe('SettingsLandingDefaultComponent', () => {
  let component: SettingsLandingDefaultComponent;
  let fixture: ComponentFixture<SettingsLandingDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLandingDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLandingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
