import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.scss']
})
export class RiskAssessmentComponent implements OnInit {
	step:number = 1;
  enableRight:boolean = false;
  enableBtnConfirm: boolean = false;

  toggleBtnConfirmEnable($event) {
    this.enableBtnConfirm = $event.checked;
  }
	moveTo($step) {
		this.step = $step;
	}
  constructor() { }

  ngOnInit() {
  }

}
