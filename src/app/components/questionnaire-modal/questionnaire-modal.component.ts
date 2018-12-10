import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service"
import { ModalStatusService } from "../../services/modal-status.service"
import { Chart } from "chart.js";

@Component({
  selector: 'app-questionnaire-modal',
  templateUrl: './questionnaire-modal.component.html',
  styleUrls: ['./questionnaire-modal.component.scss']
})
export class QuestionnaireModalComponent implements OnInit {
  @ViewChild('q7chart', { read: ElementRef }) private q7chart_ref: ElementRef;

  q7chart: any;
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

  ngAfterViewInit() {
    const chart_data = {
      labels: ['1', '2', '3', '4', '5', '6', '7','8'],
      datasets: [{
          label: 'Portfolio Balance - Accomolation',
          fill: false,
          data: [5, 6, 7, 8, 8.5, 9, 9.5],
          pointRadius : 8,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#c5c5c5',
          pointBorderWidth: 1,
          borderColor: '#c5c5c5',
          borderWidth: 1
      }]
    }
    const chart_options = {
      legend: { display: false },
      plugins: {
          strokeShadow: {},
          datalabels: { display: false }
      },
      elements: { point:{ radius: 0 } },
      scales: {
        yAxes: [{
          ticks: {
            max: 10,
            beginAtZero: true,
            stepSize: 1,
            display: false
          }
        }],
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false
          },
          ticks: {
              display: false
          },
          gridLines: {
              display: false,
              drawBorder: false,
              color: "rgba(0, 0, 0, 0)"
          }
        }]
      }
    }
    this.q7chart = new Chart(this.q7chart_ref.nativeElement, {
      type: 'line',
      data: chart_data,
      options: chart_options
    });

  }

}
