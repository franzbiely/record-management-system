import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmailLanguageComponent } from './popup-email-language.component';

describe('PopupEmailLanguageComponent', () => {
  let component: PopupEmailLanguageComponent;
  let fixture: ComponentFixture<PopupEmailLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEmailLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEmailLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
