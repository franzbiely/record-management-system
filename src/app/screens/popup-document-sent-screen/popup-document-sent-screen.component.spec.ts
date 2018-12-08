import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDocumentSentScreenComponent } from './popup-document-sent-screen.component';

describe('PopupDocumentSentScreenComponent', () => {
  let component: PopupDocumentSentScreenComponent;
  let fixture: ComponentFixture<PopupDocumentSentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDocumentSentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDocumentSentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
