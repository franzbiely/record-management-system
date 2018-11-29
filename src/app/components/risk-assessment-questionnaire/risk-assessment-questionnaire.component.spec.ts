import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentQuestionnaireComponent } from './risk-assessment-questionnaire.component';

describe('RiskAssessmentQuestionnaireComponent', () => {
  let component: RiskAssessmentQuestionnaireComponent;
  let fixture: ComponentFixture<RiskAssessmentQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskAssessmentQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
