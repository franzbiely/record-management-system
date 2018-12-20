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
  btnQ7Continue : boolean = false;
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
    var topPos = document.getElementById('question'+$step).offsetTop;
    document.getElementById('body-container').scrollTop = topPos-90;
    if(document.getElementById('chartjs-tooltip'))
      document.getElementById('chartjs-tooltip').style.opacity = '0';
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
    const that = this;
    const chart_data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [{
          label: '# of Votes',
          data: [5, 6, 7, 8, 8.5, 9, 9.5, null],
          backgroundColor: 'white',
          borderWidth: 2,
          fill: false,
          spanGaps: true,
          pointRadius: [10, 10, 10, 10, 10, 10, 10, 10],
          pointBorderColor: [
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)',
            'rgba(197,197,197,1)'
          ],
          pointBorderWidth: [2,2,2,2,2,2,2,2],
          pointHoverRadius: 9,
          pointHoverBorderWidth: 5,
          pointHoverBorderColor: '#1598cb',
          pointHoverBackgroundColor: 'white',
      }]
    }
    const chart_options = {
      title: { display: false },
      legend: { display: false },
      plugins: {
          strokeShadow: {},
          datalabels: { display: false }
      },
      elements: { point:{ radius: 0 } },
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Return'
          },
          ticks: {
            min: 0,
            max: 10,
            beginAtZero: true,
            stepSize: 1,
            display: false
          },
          gridLines: {
            drawBorder: false
          }
        }],
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Risk'
          },
          ticks: {
              display: false
          },
          gridLines: {
              display: false,
              drawBorder: false,
              color: "rgba(0, 0, 0, 0)"
          }
        }],
        responsive: true,
        maintainAspectRatio: false,
      },
      events: ['click', 'mousemove'],
      onClick: function(evt, activeElements) {
        var elementIndex = activeElements[0]._index;
        const obj = this.data.datasets[0].pointBorderColor;
        const _this = this;
        Object.keys(obj).forEach(function(key) {
          if(parseInt(key) === elementIndex) {
            _this.data.datasets[0].pointBorderColor[key] = '#1598cb';
            _this.data.datasets[0].pointRadius[key] = 9;
            _this.data.datasets[0].pointBorderWidth[key] = 5;
          }
          else {
            _this.data.datasets[0].pointBorderColor[key] = 'rgba(197,197,197,1)';
            _this.data.datasets[0].pointRadius[key] = 10;
            _this.data.datasets[0].pointBorderWidth[key] = 2;
          }
          
        });
        document.getElementById('body-container').scrollTop += 170;
        this.update();
        that.btnQ7Continue = true;
      },
      tooltips: {
            enabled: false,
            custom: function( tooltipModel ){
                var tooltipEl = document.getElementById('chartjs-tooltip');
                var markup = '';

                markup += '<div class="custom-tooltip">';
                    markup += '<span class="tri"></span><div class="predict-title">In one year, your <strong>$800,000...</strong></div>';
                    markup += '<div class="predict-decrease">Could decline to: <strong>$700,000</strong></div>';
                    markup += '<div class="predict-increase">Could grow to: <strong>$2,000,000</strong></div>';
                markup += '</div>';

                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = markup;
                    document.body.appendChild(tooltipEl);
                }
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = '0';
                    return;
                }
                

                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                var position = this._chart.canvas.getBoundingClientRect();

                tooltipEl.style.opacity = '1';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            }
        }
    }
    this.q7chart = new Chart(this.q7chart_ref.nativeElement, {
      type: 'line',
      data: chart_data,
      options: chart_options
    });

  }

}
