import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksScreenComponent } from './bookmarks-screen.component';

describe('BookmarksScreenComponent', () => {
  let component: BookmarksScreenComponent;
  let fixture: ComponentFixture<BookmarksScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
