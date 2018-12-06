import { Component, OnInit, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Chart } from "chart.js";


@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  @ViewChild('current_portfolio_chart', { read: ElementRef }) private current_portfolio_chart_ref: ElementRef;
  @ViewChild('recommended_portfolio_chart', { read: ElementRef }) private recommended_portfolio_chart_ref: ElementRef;
  @ViewChild('recommended_portfolio_chart_large', { read: ElementRef }) private recommended_portfolio_chart_large_ref: ElementRef;
  @ViewChild('piea_chart', { read: ElementRef }) private piea_chart_ref: ElementRef;
  @ViewChild('pieb_chart', { read: ElementRef }) private pieb_chart_ref: ElementRef;
  @ViewChild('piea_chart_mobile', { read: ElementRef }) private piea_chart_mobile_ref: ElementRef;
  @ViewChild('pieb_chart_mobile', { read: ElementRef }) private pieb_chart_mobile_ref: ElementRef;
  


  isSidebarOpen: boolean = true;
  goalType: string = 'Retirement';
  isCurrentActive: boolean = true;
  current_portfolio_chart: any;
  recommended_portfolio_chart: any;
  recommended_portfolio_chart_large: any;
  piea_chart: any;
  pieb_chart: any;
  piea_chart_mobile: any;
  pieb_chart_mobile: any;


  constructor(private data: DataService) { }
  onResize(event) {
    
  }
  ngOnInit() {
    this.data.simulationGoal.subscribe(value => this.goalType = value);
  }

  ngAfterViewInit() {
    const piea_chart_data = {
      labels: ['2020', '2025', '2030'],
      datasets: [{
          fill: true,
          data: [80, 15, 5],
          borderWidth: 0,
          backgroundColor : ['#465E7B', '#3D98CB', '#404041']
      }]
    }
    const piea_chart_options = {
      legend: { display: false },
      plugins: {
          strokeShadow: {},
          datalabels: { display: false }
      }
    }
    const responsive_options = { responsive : true, maintainAspectRatio: false }
    const pieb_chart_data = {
      labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
      datasets: [{
          fill: true,
          data: [45, 5, 5, 5, 50, 10, 10, 5, 10],
          borderWidth: 0,
          backgroundColor : ['#42834F','#F6BC80','#AED68F','#B95780','#F7C98B', '#ED7963', '#A9D7DF', '#465E7B', '#67C077' ]
      }]
    }
    this.piea_chart = new Chart(this.piea_chart_ref.nativeElement, {
      type: 'doughnut',
      data: piea_chart_data,
      options: piea_chart_options
    }, responsive_options);
    this.piea_chart_mobile = new Chart(this.piea_chart_mobile_ref.nativeElement, {
      type: 'doughnut',
      data: piea_chart_data,
      options: piea_chart_options
    }, responsive_options);

    this.pieb_chart = new Chart(this.pieb_chart_ref.nativeElement, {
      type: 'doughnut',
      data: pieb_chart_data,
      options: piea_chart_options
    }, responsive_options);
    this.pieb_chart_mobile = new Chart(this.pieb_chart_mobile_ref.nativeElement, {
      type: 'doughnut',
      data: pieb_chart_data,
      options: piea_chart_options
    }, responsive_options);


    
    this.recommended_portfolio_chart = new Chart(this.recommended_portfolio_chart_ref.nativeElement, {
      type: 'line',
      data: {
        labels: ['2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        datasets: [{
            label: 'Portfolio Balance - Accomolation',
            fill: false,
            data: [0, 1, 1.5, 2],
            borderColor: '#67c072',
            borderWidth: 0,
            pointRadius: 0
        }, {
            label: 'Portfolio Balance - Distribution',
            fill: false,
            data: [0, 1, 1.5, 2, 2.5, 2.8, 3],
            borderColor: '#f47a64',
            borderWidth: 0,
            pointRadius: 0
        }]
      },
      options: {
        legend: { display: true, position: 'bottom', labels: {
          fontSize: 8,
          fontColor: '#414042',
          fontFamily: 'Montserrat',
          usePointStyle: true,
          boxWidth: 8
        } },
        plugins: {
            strokeShadow: {},
            datalabels: {
                display: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    beginAtZero: true,
                    stepSize: 2,
                    callback: function(value, index, values) {
                        return value + 'M';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: { display: true }
            }]
        }
      }
    }, { responsive : true, maintainAspectRatio: false });

    this.current_portfolio_chart = new Chart(this.current_portfolio_chart_ref.nativeElement, {
      type: 'line',
      data: {
        labels: ['2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        datasets: [{
            label: 'Portfolio Balance - Accomolation',
            fill: false,
            data: [0, 1, 1.5],
            borderColor: '#9d9d9d',
            borderWidth: 6,
            pointRadius: 0
        }, {
            label: 'Portfolio Balance - Distribution',
            fill: false,
            data: [0, 1, 1.5, 2, 2.5, 2.8, 3],
            borderColor: '#f47a64',
            borderWidth: 2,
            pointRadius: 0
        }]
      },
      options: {
        legend: { display: false, position: 'bottom' },
        plugins: {
            strokeShadow: {},
            datalabels: {
                display: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    beginAtZero: true,
                    stepSize: 2,
                    callback: function(value, index, values) {
                        return value + 'M';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: { display: true }
            }]
        }
      }
    }, { responsive : true, maintainAspectRatio: false });
}

closeSidebar() {
  this.isSidebarOpen = false;
}
openSidebar() {
  this.isSidebarOpen = true;
}

hideCurrent() {
  this.isCurrentActive = false;
  // this.isSidebarOpen = false;
  // window.dispatchEvent(new Event('resize'));
}
}
