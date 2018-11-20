import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSendDocumentsComponent } from './popup-send-documents.component';

describe('PopupSendDocumentsComponent', () => {
  let component: PopupSendDocumentsComponent;
  let fixture: ComponentFixture<PopupSendDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSendDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSendDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
