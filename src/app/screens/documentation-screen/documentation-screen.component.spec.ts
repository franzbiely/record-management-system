import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationScreenComponent } from './documentation-screen.component';

describe('DocumentationScreenComponent', () => {
  let component: DocumentationScreenComponent;
  let fixture: ComponentFixture<DocumentationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
