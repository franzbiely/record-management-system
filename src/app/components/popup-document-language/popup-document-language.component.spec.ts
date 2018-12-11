import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDocumentLanguageComponent } from './popup-document-language.component';

describe('PopupDocumentLanguageComponent', () => {
  let component: PopupDocumentLanguageComponent;
  let fixture: ComponentFixture<PopupDocumentLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDocumentLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDocumentLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
