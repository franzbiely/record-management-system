import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserSearchPopupComponent } from './adviser-search-popup.component';

describe('AdviserSearchPopupComponent', () => {
  let component: AdviserSearchPopupComponent;
  let fixture: ComponentFixture<AdviserSearchPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserSearchPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserSearchPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
