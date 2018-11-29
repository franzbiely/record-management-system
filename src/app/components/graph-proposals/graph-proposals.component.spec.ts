import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProposalsComponent } from './graph-proposals.component';

describe('GraphProposalsComponent', () => {
  let component: GraphProposalsComponent;
  let fixture: ComponentFixture<GraphProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
