import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationBookmarkComponent } from './documentation-bookmark.component';

describe('DocumentationBookmarkComponent', () => {
  let component: DocumentationBookmarkComponent;
  let fixture: ComponentFixture<DocumentationBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
