import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationBookmarkScreensComponent } from './documentation-bookmark-screens.component';

describe('DocumentationBookmarkScreensComponent', () => {
  let component: DocumentationBookmarkScreensComponent;
  let fixture: ComponentFixture<DocumentationBookmarkScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationBookmarkScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationBookmarkScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
