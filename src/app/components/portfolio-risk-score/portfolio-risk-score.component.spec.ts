import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioRiskScoreComponent } from './portfolio-risk-score.component';

describe('PortfolioRiskScoreComponent', () => {
  let component: PortfolioRiskScoreComponent;
  let fixture: ComponentFixture<PortfolioRiskScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioRiskScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioRiskScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
