import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFilterPortfolioComponent } from './dropdown-filter-portfolio.component';

describe('DropdownFilterPortfolioComponent', () => {
  let component: DropdownFilterPortfolioComponent;
  let fixture: ComponentFixture<DropdownFilterPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownFilterPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFilterPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
