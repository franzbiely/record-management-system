import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"

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

  toggleBtnConfirmEnable($event) {
    this.enableBtnConfirm = $event.checked;
  }
  btnTargetRiskConfirm() {
    this.data.SET_proposal_show_btnNext(true);
    this.moveTo(5);
  }
	moveTo($step) {
		this.step = $step;
	}
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
  }

}
