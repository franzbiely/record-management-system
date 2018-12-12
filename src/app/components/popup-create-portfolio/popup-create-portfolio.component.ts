import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"
import { Chart } from "chart.js";

@Component({
	selector: 'app-popup-create-portfolio',
	templateUrl: './popup-create-portfolio.component.html',
	styleUrls: ['./popup-create-portfolio.component.scss']
})
export class PopupCreatePortfolioComponent implements OnInit {
	@ViewChild('graph', { read: ElementRef }) private graph_ref: ElementRef;

	btnNext: boolean = false;
	viewPortfolioModal: boolean = false;
	portfolioPopType : string|'view'|'edit' = 'view';
	totalAllocation: number = 0;
	
	allocation_data = {
		0 : {
			label : 'Bonds',
			value : 0,
			data : [{
				security_name : 'SA Global Fixed Income Select',
				asset_class : 'Global Short Bonds',
				security_id : 'SAFLX',
				value : 10
			}]
		},
		1 : {
			label : 'U.S. STOCKS',
			value : 0,
			data : [{
				security_name : 'SA US Small Company Select',
				asset_class : 'U.S. Small Neutral Stocks',
				security_id : 'SAFLX',
				value : 15
			}, {
				security_name : 'SA US Value Select',
				asset_class : 'U.S. Large Value Stocks',
				security_id : 'SAFLX',
				value : 18
			}]
		}
	}
	
	constructor(private modalStatus: ModalStatusService, private data: DataService) { }

	ngOnInit() {
		this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
		this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);
	}
	ngAfterViewInit() {
	    const chart_data = {
	      labels: ['Global Short Bonds', 'U.S. Small Neutral Stocks', 'U.S. Large Value Stocks'],
	      datasets: [{
	          fill: true,
	          data: [ 
	          	this.allocation_data[0].data[0].value, this.allocation_data[1].data[0].value, this.allocation_data[1].data[1].value
	          ],
	          borderWidth: 0,
	          backgroundColor : ['#67c078', '#465f7c', '#3d98cb']
	      }]
	    }
	    const chart_options = {
	      legend: { display: false },
	      plugins: {
	          strokeShadow: {},
	          datalabels: { display: false }
	      },
	      responsive : true, maintainAspectRatio: false
	    }
	    // var graph = new Chart( this.graph_ref.nativeElement );
  			// graph.Pie(chart_data, chart_options);  
	    // this.graph = new Chart(this.graph_ref.nativeElement, {
	    //   type: 'pie',
	    //   data: chart_data,
	    //   options: chart_options
	    // });

	}
	ngOnChanges(changes: SimpleChanges) {
		console.log('changing', changes);
	}
	onAllocationChange(obj, val) {
		obj = val;
		console.log(obj, val);
	}
	closeMe() {
		this.modalStatus.SET_viewPortfolio(false);
	}
	editEventReciever($this) {
		this.data.SET_portfolioPopupType('edit');
	}
	saveEvent() {
		this.modalStatus.SET_viewPortfolio(false);
		this.data.SET_proposal_show_btnNext(true);
	}
	toggleModify() {
		if (this.portfolioPopType==='view') {
			this.data.SET_portfolioPopupType( 'edit' );	
		}
		else {
			this.data.SET_portfolioPopupType( 'view' );		
		}
	}
	updateGroupVal() {
		let d = 0;
		Object.entries(this.allocation_data).forEach(([key, val]) => {
			let c = 0;
			Object.entries(val.data).forEach(([k,v]) =>{
				// c += parseInt(v.value);
			})
			this.allocation_data[key].value = c;
			d += c;
		})
		this.totalAllocation = d;
	}
}
