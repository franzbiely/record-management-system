import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-questionnaire-modal',
  templateUrl: './questionnaire-modal.component.html',
  styleUrls: ['./questionnaire-modal.component.scss']
})
export class QuestionnaireModalComponent implements OnInit {
  btnNext : boolean = false;
	questionnaireModal: boolean = false;
  step: number = 1;
  riskStep:number = 1; 

  constructor(private data: DataService, private modalStatus: ModalStatusService) { }
  closeMe() {
  	this.modalStatus.toggleQuestionnaire(false);
  }
  ngOnInit() {
    this.data.proposal_risk_step.subscribe(value => this.riskStep = value);
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
  	this.modalStatus.questionnaire.subscribe(value => this.questionnaireModal = value);
  }
  moveStep($step) {
    this.step = $step;
    console.log('question'+$step);
    var topPos = document.getElementById('question'+$step).offsetTop;
    document.getElementById('body-container').scrollTop = topPos-10;
  }
  riskMoveStepTo($step) {
    this.data.SET_proposal_risk_step($step);
    this.data.SET_proposal_show_btnNext(true);
    this.closeMe();
  }
  foo() {
    alert('a')
  }

}
