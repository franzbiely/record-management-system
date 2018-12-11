import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmailLanguageScreenComponent } from './popup-email-language-screen.component';

describe('PopupEmailLanguageScreenComponent', () => {
  let component: PopupEmailLanguageScreenComponent;
  let fixture: ComponentFixture<PopupEmailLanguageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEmailLanguageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEmailLanguageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
