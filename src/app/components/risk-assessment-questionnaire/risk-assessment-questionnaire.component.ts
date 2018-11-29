import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-assessment-questionnaire',
  templateUrl: './risk-assessment-questionnaire.component.html',
  styleUrls: ['./risk-assessment-questionnaire.component.scss']
})
export class RiskAssessmentQuestionnaireComponent implements OnInit {

  constructor() { }

  selectRecepient: boolean = false;
  selectMessageTemplate: boolean = false;
  sendQuestionnaire: boolean = false;

  ngOnInit() {
  }

}
