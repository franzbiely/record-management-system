import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDocumentLanguageScreenComponent } from './popup-document-language-screen.component';

describe('PopupDocumentLanguageScreenComponent', () => {
  let component: PopupDocumentLanguageScreenComponent;
  let fixture: ComponentFixture<PopupDocumentLanguageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDocumentLanguageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDocumentLanguageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
