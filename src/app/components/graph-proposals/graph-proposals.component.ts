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
    checker : boolean = true;
    checkCounter: number = 0;
    goalValue : number = 0;
    checkAll : boolean = false;
    showCalendar: boolean = false;
    @Input() reportType = 'default';
    @Input() reportTitle = '';
    @Input() reportSubTitle = '';
    filter_data = {
        state : {
            0 : false, //all
            1 : false,
            2 : false,
        },
        status : {
            0 : false, //all
            1 : false,
            2 : false,
            3 : false,
            4 : false,
        }
    }
   
    reportBlock: TemplateRef<any> | null = null;

    @ViewChild('defReport') defReport: TemplateRef<any> | null = null;
    @ViewChild('tvpmReport') tvpmReport: TemplateRef<any> | null = null;
    @ViewChild('tvprReport') tvprReport: TemplateRef<any> | null = null;
    @ViewChild('tvppReport') tvppReport: TemplateRef<any> | null = null;
    @ViewChild('pdoReport') pdoReport: TemplateRef<any> | null = null;
    @ViewChild('tvpsReport') tvpsReport: TemplateRef<any> | null = null;
    @ViewChild('cpsReport') cpsReport: TemplateRef<any> | null = null;
    @ViewChild('aumReport') aumReport: TemplateRef<any> | null = null;
    @ViewChild('ipoReport') ipoReport: TemplateRef<any> | null = null;

    @ViewChild('theChart', {read: ElementRef}) private chartRef: ElementRef;
    chart: any;


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
        $(document).bind('click', function (e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("dropdown")) $(".multiSelect").hide();
            if (!$clicked.parents().hasClass("dropdownStatus")) $(".multiSelectStatus").hide();
        });
    }
    updateGroupVal() {
        let val = $("#goal").val().replace(/,/g, '');
        if (val !== '') { 
            val = (typeof val === 'string') || val !== '' ? parseInt(val) : val;
            if (val !== NaN){   
                this.goalValue = parseInt(val);
                var parts = val.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                val =  parts.join(".");
                console.log(val, this.goalValue);
            }
        }
        $("#goal").val(val);
        $("#goal-value").text('$'+val);
	}
    toggleDropdown(id){
        $(".multiSelect").hide();
        if (this.checker){
            $("#ID"+id).show();
            this.checker = false;
        }else {
            $("#ID"+id).hide();
            this.checker = !this.checker;
        }
        console.log(this.checker);
    }
    toggleDropdownStatus(id){
        $(".multiSelectStatus").hide();
        if (this.checker){
            $("#STATUS"+id).show();
            this.checker = false;
        }else {
            $("#STATUS"+id).hide();
            this.checker = !this.checker;
        }
        console.log(this.checker);
    }
    validate(searchValue : number) {
        if(Number.isInteger(searchValue)){
            console.log('true');
        }
	}
    selectAllToggler(event, type , all, id) {
        var data = "";
        if(event.checked || all == 'all') {
            Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = true)	
            console.log(this.filter_data)
            this.checkAll = true;
            this.checkCounter = 4;
            data = 'All';
        }
        else {
            Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = false)
            console.log(this.filter_data)
            this.checkAll = false;
            this.checkCounter = 0;
            data = this.checkType(type);
        }
        this.setData(type, id, data);
    }
    checkFilter(event, isForAll, type, value, id) {
        if(event.checked) {
            this.checkCounter++;
            var data = this.getData(type, id);
            if (data === this.checkType(type) || this.checkNull(data) == true || data=="All"){
                data = value;
            }else{
                data = data+","+value;
                if ( type == 'state' && this.dataLength(data) == 2){
                    this.selectAllToggler(event, type , 'all', id); data = "All"; 
                }
                if ( type == 'status' && this.dataLength(data) == 4){
                    this.selectAllToggler(event, type , 'all', id); data = "All"; 
                }
            }
        }
        else {
            this.checkCounter--;
            var data = this.getData(type, id);
            if (this.checkAll == true){
                Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = false)
                this.checkAll = false;
                data = this.checkType(type);
            }else{
                if (data === this.checkType(type) || this.checkNull(data) == true || data=="All"){
                    data = this.checkType(type);
                }else{
                    let splData = data.split(',');
                    splData.forEach((e,i)=> { if (e === value ){  splData.splice(i,1); }});
                    data = splData;
                }
                if (data.length < 1 || data == undefined) {
                    console.log(data);
                    data = this.checkType(type);
                }
            }
        }  
        this.setData(type, id, data);
    }
    checkType(val){
        return val == 'state' ? 'Select State' : 'Select Status';
    }
    checkNull(val){
        return ( val === "" || val === null ) ? true : false;
    }
    dataLength(val){
        return val.split(',').length;
    }
    getData(type, id){
        return $('#'+type+id).text();
    }
    setData(type, id, val){
        $('#'+type+id).text(val); 
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
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.maintainAspectRatio = false;
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
                        data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
                    },
                    {
                        backgroundColor: '#475F7A',
                        borderColor: '#475F7A',
                        data: [randnum(), randnum(), randnum(), randnum(), randnum(), randnum()]
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
                            fontSize: 8,
                            max: 15,
                            stepSize: 5
                        }
                    }],
                    xAxes: [{
                        beginAtZero: true,
                        autoSkip: false,
                        ticks: {
                            fontSize:8,
                            maxRotation: 90,
                            minRotation: 90
                        }
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
