import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalScreenComponent } from './new-proposal-screen.component';

describe('NewProposalScreenComponent', () => {
  let component: NewProposalScreenComponent;
  let fixture: ComponentFixture<NewProposalScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
