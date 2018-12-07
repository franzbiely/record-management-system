import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDocumentSentComponent } from './popup-document-sent.component';

describe('PopupDocumentSentComponent', () => {
  let component: PopupDocumentSentComponent;
  let fixture: ComponentFixture<PopupDocumentSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDocumentSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDocumentSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
