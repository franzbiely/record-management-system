import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Chart } from "chart.js";

@Component({
    selector: "app-graph-proposals",
    templateUrl: "./graph-proposals.component.html",
    styleUrls: ["./graph-proposals.component.scss"]
})
export class GraphProposalsComponent implements OnInit {
    @Input() reportType: string;
    @ViewChild('proposalsChart') private chartRef;
    chart: any;

    constructor() {}

    ngOnInit() {
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
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
                    strokeShadow: {}
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
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false,
                    mode: 'index',
                    position: 'nearest',
                    // custom: this.customTooltips - commented because of ERROR in src/app/components/graph-proposals/graph-proposals.component.ts(104,34): error TS2339: Property 'customTooltips' does not exist on type 'GraphProposalsComponent'.
                }
            },
            draw: function(){
                console.log( 'hello' );
            }
        });
    }
}
