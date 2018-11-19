import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddGraphsComponent } from './view-add-graphs.component';

describe('ViewAddGraphsComponent', () => {
  let component: ViewAddGraphsComponent;
  let fixture: ComponentFixture<ViewAddGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
