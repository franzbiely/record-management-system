import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss']
})
export class RiskAssessmentComponent implements OnInit {
  btnNext : boolean = false;
	step:number = 1;
  enableRight:boolean = false;
  enableBtnConfirm: boolean = false;
  riskSendFormModal: boolean = false;
  questionsModal: boolean = false

  toggleBtnConfirmEnable($event) {
    this.enableBtnConfirm = $event.checked;
  }
  btnTargetRiskConfirm() {
    this.data.SET_proposal_show_btnNext(true);
    this.moveTo(5);
  }
  openRiskSendForm() {
    this.modalStatus.toggleRiskSendForm(true);
  }
	moveTo($step) {
    this.data.SET_proposal_risk_step($step);
	}
  openQuestionnaire() {
    this.modalStatus.toggleQuestionnaire(true);
  }
  constructor(private data: DataService, private modalStatus: ModalStatusService) { 
    
  }

  ngOnInit() {
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
    this.data.proposal_risk_step.subscribe(value => this.step = value);
    this.modalStatus.riskSendForm.subscribe(value => this.riskSendFormModal = value);
    this.modalStatus.questionnaire.subscribe(value => this.questionsModal = value)
    // this.data.SET_proposalSteps(1);
  }
  
}
