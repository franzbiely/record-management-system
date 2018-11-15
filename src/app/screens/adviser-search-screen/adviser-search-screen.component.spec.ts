import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserSearchScreenComponent } from './adviser-search-screen.component';

describe('AdviserSearchScreenComponent', () => {
  let component: AdviserSearchScreenComponent;
  let fixture: ComponentFixture<AdviserSearchScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserSearchScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
