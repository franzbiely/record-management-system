import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownActionsPortfolioComponent } from './dropdown-actions-portfolio.component';

describe('DropdownActionsPortfolioComponent', () => {
  let component: DropdownActionsPortfolioComponent;
  let fixture: ComponentFixture<DropdownActionsPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownActionsPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownActionsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
