import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveArchiveComponent } from './active-archive.component';

describe('ActiveArchiveComponent', () => {
  let component: ActiveArchiveComponent;
  let fixture: ComponentFixture<ActiveArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
