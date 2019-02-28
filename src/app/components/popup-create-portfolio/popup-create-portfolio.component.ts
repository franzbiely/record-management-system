import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"
import { Chart } from "chart.js";
import * as $ from 'jquery';

@Component({
	selector: 'app-popup-create-portfolio',
	templateUrl: './popup-create-portfolio.component.html',
	styleUrls: ['./popup-create-portfolio.component.scss']
})
export class PopupCreatePortfolioComponent implements OnInit {
	@ViewChild('graph', { read: ElementRef }) private graph_ref: ElementRef;
	chart: any;
	alertMessage: string = "";
	btnNext: boolean = false;
	onSave: boolean = false;
	viewPortfolioModal: boolean = false;
	portfolioPopType : string|'view'|'edit' = 'view';
	totalAllocation: number = 0;
	haveAllocationData: boolean = false;
	showSuggestion: boolean = false;
	
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
	    this.updateChart();
	}
	clickSuggestion() {
		this.showSuggestion = false;
		this.haveAllocationData = true;
		this.updateGroupVal();
	}
	onSearchChange(searchValue : string) {
		if(searchValue!=''){
			this.showSuggestion = true;
		}
		else {
			this.showSuggestion = false;
		}
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
	updateChart() {
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
	    this.chart = new Chart(this.graph_ref.nativeElement, {
	      type: 'pie',
	      data: chart_data,
	      options: chart_options
	    });
	}
	updateGroupVal() {
		let d:number = 0;
		Object.entries(this.allocation_data).forEach(([key, val]) => {
			let c:number = 0;
			Object.entries(val.data).forEach(([k,v]) =>{
				c += (typeof v.value === 'string') ? parseInt(v.value) : v.value;
			})
			this.allocation_data[key].value = c;
			d = d+c;
		})
		this.totalAllocation = d;
		if (this.totalAllocation !== 100){
			this.alertMessage = this.totalAllocation < 100 
				? ((100 - this.totalAllocation) == 1 ? "Need " : "Needs " ) +" more allocation: "+(100 - this.totalAllocation) 
						: "Allocation "+((this.totalAllocation - 100) == 1 ? "exceed " : "exceeds " )+"up to: "+(this.totalAllocation - 100);
						$('.allocation-alert').fadeIn('slow');
						this.onSave = false;
		}else { 
			$('.allocation-alert').fadeOut('fast');
			this.alertMessage = ""
			this.onSave = true;
		}
		this.updateChart();
	}
	removeRow(event) {
		$(event.target).closest('tr').fadeOut();
	}
}
