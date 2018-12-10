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

    const line_chart_options = {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 0,
          fontColor: '#414042',
          fontSize: 8,
          fontFamily: "'Montserrat', sans-serif",
          usePointStyle: true,
          filter: function(item, chart) { return !item.text.includes('none'); }
        }
      },
      elements: { point:{ radius: 0 } },
      plugins: { datalabels: { display: false } },
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            max: 10,
            beginAtZero: true,
            stepSize: 2,
            callback: function(value, index, values) { return value + 'M'; }
          }
        }],
        xAxes: [{
          gridLines: { drawOnChartArea: false },
          ticks: { display: true }
        }]
      }
    }
    
    this.recommended_portfolio_chart = new Chart(this.recommended_portfolio_chart_ref.nativeElement, {
      type: 'line',
      data: {
        labels: ['2020', '2025', '2030', '2035', '2040', '2045', '2050', '2055'],
        datasets: [{
            label: 'Portfolio Balance - Accomolation',
            fill: false,
            data: [0, 1, 1.5, 2],
            backgroundColor: '#67c072',
            borderColor: '#67c072',
            borderWidth: 0,
            borderCapStyle: 'round'
        }, {
            label: 'Portfolio Balance - Distribution',
            fill: false,
            data: [0, 1, 1.5, 2, 2.5, 2.8, 3, 4],
            backgroundColor: '#f47a64',
            borderColor: '#f47a64',
            borderWidth: 0,
            borderCapStyle: 'round'
        }, {
          backgroundColor: 'rgba(229, 244, 250, 0.8)',
          borderColor: 'rgba(229, 244, 250, 0)',
          data: [0, 1.5, 2, 3, 3.5, 3.8, 4, 5],
          label: 'none',
          fill: '-1'
        },
        {
          backgroundColor: 'rgba(229, 244, 250, 0.8)',
          borderColor: 'rgba(229, 244, 250, 0)',
          data: [0, 0.5, 1, 1.5, 2, 2.5, 2.8, 3  ],
          label: 'none',
          fill: '-1'
        }]
      },
      options: line_chart_options, { responsive : true, maintainAspectRatio: false });
    
    this.current_portfolio_chart = new Chart(this.current_portfolio_chart_ref.nativeElement, {
      type: 'line',
      data: {
        labels: ['2020', '2025', '2030', '2035', '2040', '2045', '2050', '2055'],
        datasets: [{
          backgroundColor: '#c5c5c5',
          borderColor: '#c5c5c5',
          borderWidth: 0,
          borderCapStyle: 'round',
          data: [1, 2, 3],
          label: ' Portfolio Balance - Accumulation',
          fill: false,
        },
        {
          backgroundColor: '#f47a64',
          borderColor: '#f47a64',
          borderWidth: 0,
          borderCapStyle: 'round',
          data: [1, 2, 3, 4, 5, 5.5, 6, 7],
          label: ' Portfolio Balance - Distribution',
          fill: false,
        },
        {
          backgroundColor: 'rgba(229, 244, 250, 0.8)',
          borderColor: 'rgba(229, 244, 250, 0)',
          data: [1, 2.2, 3.5, 5, 6, 6.5, 7, 8],
          label: 'none',
          fill: '-1'
        },
        {
          backgroundColor: 'rgba(229, 244, 250, 0.8)',
          borderColor: 'rgba(229, 244, 250, 0)',
          data: [1, 1.9, 2.7, 3, 4, 4.5, 5, 6],
          label: 'none',
          fill: '-1'
        }]
      },
      options: line_chart_options, { responsive : true, maintainAspectRatio: false });
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
