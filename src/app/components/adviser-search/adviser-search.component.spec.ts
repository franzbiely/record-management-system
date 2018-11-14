import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserSearchComponent } from './adviser-search.component';

describe('AdviserSearchComponent', () => {
  let component: AdviserSearchComponent;
  let fixture: ComponentFixture<AdviserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
