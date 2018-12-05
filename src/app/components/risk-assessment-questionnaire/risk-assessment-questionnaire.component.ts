import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

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
  sendDocumentModal: boolean = false;
  riskSendFormModal: boolean = false;
  saveFunc() {
    this.saveEvent.emit(true);
  }
  constructor(private modalStatus: ModalStatusService) {
  }
  ngOnInit() {
    this.modalStatus.sendDocument.subscribe(value => this.sendDocumentModal = value);
    this.modalStatus.riskSendForm.subscribe(value => this.riskSendFormModal = value);
  }
  closeMe() {
    this.modalStatus.SET_sendDocument(false);
    this.modalStatus.toggleRiskSendForm(false);
  }
}
