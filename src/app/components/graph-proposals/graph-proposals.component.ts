import { DisclaimerComponent } from './../disclaimer/disclaimer.component';
import { Component, OnInit, ViewChild, Input, TemplateRef, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import 'chartjs-plugin-datalabels';

declare var jquery: any;
declare var $: any;

@Component({
    selector: "app-graph-proposals",
    templateUrl: "./graph-proposals.component.html",
    styleUrls: ["./graph-proposals.component.scss"]
})
export class GraphProposalsComponent implements OnInit {

    showCalendar: boolean = false;
    @Input() reportType = 'default';
    @Input() reportTitle = '';
    @Input() reportSubTitle = '';

    reportBlock: TemplateRef<any>|null = null;

    @ViewChild('defReport') defReport: TemplateRef<any>|null = null;
    @ViewChild('tvpmReport') tvpmReport: TemplateRef<any>|null = null;
    @ViewChild('tvprReport') tvprReport: TemplateRef<any>|null = null;
    @ViewChild('tvppReport') tvppReport: TemplateRef<any>|null = null;
    @ViewChild('pdoReport') pdoReport: TemplateRef<any>|null = null;
    @ViewChild('tvpsReport') tvpsReport: TemplateRef<any>|null = null;
    @ViewChild('cpsReport') cpsReport: TemplateRef<any>|null = null;
    @ViewChild('aumReport') aumReport: TemplateRef<any>|null = null;
    @ViewChild('ipoReport') ipoReport: TemplateRef<any>|null = null;

    @ViewChild('theChart', {read: ElementRef}) private chartRef: ElementRef;
    chart: any;

    constructor() {}

    ngOnInit() {
        switch (this.reportType) {
            case 'tvpm':
                this.reportTitle = 'Total Value of Proposals';
                this.reportSubTitle = 'By Month';
                this.reportBlock = this.tvpmReport;
                break;
            case 'tvpr':
                this.reportTitle = 'Total Value of Proposals';
                this.reportSubTitle = 'By Risk';
                this.reportBlock = this.tvprReport;
                break;
            case 'tvpp':
                this.reportTitle = 'Total Value of Proposals';
                this.reportSubTitle = 'By Portfolio';
                this.reportBlock = this.tvppReport;
                break;
            case 'pdo':
                this.reportTitle = 'Proposals';
                this.reportSubTitle = 'By Days Old (Last 30 Days)';
                this.reportBlock = this.pdoReport;
                break;
            case 'tvps':
                this.reportTitle = 'Total Value';
                this.reportSubTitle = 'Of Proposal Status';
                this.reportBlock = this.tvpsReport;
                break;
            case 'cps':
                this.reportTitle = 'Count of Proposals';
                this.reportSubTitle = 'By Status';
                this.reportBlock = this.cpsReport;
                break;
            case 'aum':
                this.reportTitle = 'Opportunity AUM';
                this.reportSubTitle = 'Forecast Overtime';
                this.reportBlock = this.aumReport;
                break;
            case 'ipo':
                this.reportTitle = 'Implemented Proposals';
                this.reportSubTitle = 'Overtime';
                this.reportBlock = this.ipoReport;
                break;
            default:
                this.reportTitle = '# of Proposals';
                this.reportSubTitle = 'In Progress';
                this.reportBlock = this.defReport;
                break;
        }
    }

    ngAfterViewInit() {
        switch (this.reportType) {
            case 'tvpm':
                this.tvpmRender();
                break;
            case 'tvpr':
                this.tvprRender();
                break;
            case 'tvpp':
                this.tvppRender();
                break;
            case 'pdo':
                this.pdoRender();
                break;
            case 'tvps':
                this.tvpsRender();
                break;
            case 'cps':
                this.cpsRender();
                break;
            case 'aum':
                this.aumRender();
                break;
            case 'ipo':
                this.ipoRender();
                break;
            default:
                this.defaultRender();
                break;
        }
    }

    tvpmRender() {
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [{
                    backgroundColor: '#aed68f',
                    borderColor: '#aed68f',
                    data: [1.25, 1.85, 2.20, 1.80, 1.75, 1.30]
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return '$' + value + 'M';
                            }
                        }
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        formatter: function(value, context) {
                            return '$' + value + 'M';
                        },
                        anchor: 'end',
                        align: 'end',
                        color: '#67c072',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    tvprRender() {
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ['Equity', 'Capital Appreciation', 'Moderate Growth',  'Moderate', 'Balanced', 'Conservative', 'Defensive'],
                datasets: [{
                    backgroundColor: '#FCBB84',
                    borderColor: '#FCBB84',
                    data: [6, 9, 10, 11, 9, 6, 5]
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            stepSize: 5,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: '#FCBB84',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    tvppRender() {
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ['Loring Ward Moderate - DFA','Loring Ward Balanced - DFA','Loring Ward Moderate Growth - Select','Loring Ward Moderate Growth - DFA','Loring Ward Capital Appreciation - Select','Loring Ward Equity - DFA','Loring Ward Moderate - Select','Loring Ward Balanced - Select','Loring Ward Moderate - Tax-Managed - DFA','Loring Ward Defensive - DFA'],
                datasets: [{
                    backgroundColor: '#4D749F',
                    borderColor: '#4D749F',
                    data: [2.70, 2.60, 2.50, 2.25, 2.20, 1.70, 1.25, 1.22, 1.20, 1]
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        },
                        ticks: {
                            fontSize: 9
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return '$' + value + 'M';
                            }
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: '#4D749F',
                        font: {
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            return '$' + value + 'M';
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    pdoRender() {
        const dmonth = [];
        const dvalues = [];

        for (let dm = 0; dm <= 30; dm++) {
            if ( dm % 2 ) {
                dmonth.push( '' );
            } else {
                dmonth.push(dm);
            }

            dvalues.push( Math.floor(Math.random() * (10 - 1 + 1) ) + 1 );
        }

        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'bar',
            data: {
                labels: dmonth,
                datasets: [{
                    backgroundColor: '#465e7b',
                    borderColor: '#465e7b',
                    data: dvalues
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            stepSize: 2,
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            stepSize: 2
                        }
                    }]
                },
                showDatapoints: false,
                plugins: {
                    datalabels: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    tvpsRender() {
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ['Waiting on Paperwork', 'Implemented/Invested', 'Paperwork Pending', 'Waiting on Funding', 'Active/In Progress'],
                datasets: [{
                    backgroundColor: '#77C2CE',
                    borderColor: '#77C2CE',
                    data: [3.65, 2.85, 2.20, 1.95, 1.75]
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return '$' + value + 'M';
                            }
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: '#77C2CE',
                        font: {
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            return '$' + value + 'M';
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    cpsRender() {
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: ['Waiting on Paperwork', 'Implemented/Invested', 'Paperwork Pending', 'Waiting on Funding', 'Active/In Progress'],
                datasets: [{
                    backgroundColor: '#FDCB96',
                    borderColor: '#FDCB96',
                    data: [8, 9, 10, 6, 8]
                }]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            max: 15,
                            stepSize: 5,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)'
                        }
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: '#FDCB96',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    aumRender() {
        console.log( 'rendering AUM' );
    }

    ipoRender() {
        function randnum() {
            return Math.floor(Math.random() * (15 - 1 + 1) ) + 1;
        }
        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'bar',
            data: {
                labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
                datasets: [
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum()]
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 15,
                            stepSize: 5,
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        minRotation: 0,
                        maxRotation: 0
                    }]
                },
                showDatapoints: true,
                plugins: {
                    datalabels: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    }

    defaultRender() {
        Chart.defaults.plugins = Chart.defaults.plugins || {};
        Chart.defaults.plugins.strokeShadow = {};

        Chart.plugins.register({
            id: 'strokeShadow',
            afterDatasetsDraw: function(chart) {
                const ctx = chart.chart.ctx;

                const originalStroke = ctx.stroke;
                ctx.stroke = function () {
                    ctx.save();
                    ctx.shadowColor = 'rgba(52, 53, 52, 0.1)';
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 6;
                    originalStroke.apply(this, arguments);
                    ctx.restore();
                };
            }
        });

        this.chart = new Chart(this.chartRef.nativeElement, {
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(153, ​ 153, ​ 153, 1);',
                    borderWidth: 3,
                    borderDash: [2, 4],
                    borderColor: '#f79961',
                    borderCapStyle: 'round',
                    fill: false
                }]
            },
            options: {
                plugins: {
                    strokeShadow: {},
                    datalabels: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
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
                            color: 'rgba(0, 0, 0, 0)',
                            drawBorder: false,
                            drawTicks: false
                        }
					}],
					yAxes: [{
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
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    toggleSettings(event) {
        const element = $( event.target );
        
        element.parents( '.rms-analytics-box' ).eq(0).toggleClass( 'is-settings' );
    }

    public removeBox(event) {
        console.log( 'sas' );
    }
}
