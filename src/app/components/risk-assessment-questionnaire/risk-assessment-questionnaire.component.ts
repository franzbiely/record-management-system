import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-risk-assessment-questionnaire',
  templateUrl: './risk-assessment-questionnaire.component.html',
  styleUrls: ['./risk-assessment-questionnaire.component.scss']
})
export class RiskAssessmentQuestionnaireComponent implements OnInit {
  @Input() title = 'Risk Assessment Questionnaire';
  @Input() sendLabel = 'SEND QUESTIONNAIRE';
  @Output() saveEvent = new EventEmitter<boolean>();
  selectRecepient: boolean = false;
  selectMessageTemplate: boolean = false;
  sendQuestionnaire: boolean = false;
  saveFunc() {
    this.saveEvent.emit(true);
  }
  constructor() {
  }
  ngOnInit() {
  }
}
