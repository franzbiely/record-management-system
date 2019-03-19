import { Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"
import { Chart } from "chart.js";
import { OrderPipe } from 'ngx-order-pipe';
import * as $ from 'jquery';

@Component({
	selector: 'app-popup-create-portfolio',
	templateUrl: './popup-create-portfolio.component.html',
	styleUrls: ['./popup-create-portfolio.component.scss']
})
export class PopupCreatePortfolioComponent implements OnInit {
	@ViewChild('graph', { read: ElementRef }) private graph_ref: ElementRef;
	riskStatusDanger : boolean = false; // false means inside the range | true means outside the range
	chart: any;
	bonds_value = 0;
	stocks_value = 0;
	count = [0,1];
	one = false;
	two = false;
	three = false;
	alertMessage: string = "";
	btnNext: boolean = false;
	onSave: boolean = false;
	viewPortfolioModal: boolean = false;
	portfolioPopType : string|'view'|'edit' = 'view';
	totalAllocation: number = 0;
	haveAllocationData: boolean = false;
	showSuggestion: boolean = false;
	targetRiskName : 'TARGET RISK NAME';
	targetRange : '0';

	data_number :any = [];
	data_label :any = [];
	data_color :any = [];
	
	icon: string = 'down';
  order: string = 'security_name';
  reverse: boolean = false;
  sortedCollection: any[];
	
	allocation_data = [
		{
			label : 'Bonds',
			value : 0,
			data : [{
				security_name : 'SA Global Fixed Income Select',
				asset_class : 'Global Short Bonds',
				security_id : 'SAFLX',
				color: '#aed68f',
				value : 10
			}]
		},
		{
			label : 'U.S. STOCKS',
			value : 0,
			data : [{
				security_name : 'SA US Small Company Select',
				asset_class : 'U.S. Small Neutral Stocks',
				security_id : 'SAFLX',
				color: '#42834f',
				value : 15
			}, {
				security_name : 'SA US Value Select',
				asset_class : 'U.S. Large Value Stocks',
				security_id : 'SAFLX',
				color: '#1598cb',
				value : 18
			}]
		}
	]
	
	constructor(private modalStatus: ModalStatusService, private data: DataService, private orderPipe: OrderPipe) { 
		this.sortedCollection = orderPipe.transform(this.allocation_data, 'security_name');
    console.log(this.sortedCollection);
	}

	ngOnInit() {
		this.targetRange = "0";
		this.targetRiskName = "TARGET RISK NAME";
		this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
		this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);
		if (this.portfolioPopType == 'edit' || this.portfolioPopType == 'new'){
			$('.btn-close').hide();
		} else {
			$('.btn-cancel').hide();
			$('.btn-save').hide();
		}
		this.getTotal()
		this.updateGroupVal()
	}
	getTotal(){
		this.bonds_value = 0;
		this.stocks_value = 0;
		Object.entries(this.allocation_data).forEach(([key, val]) => {
			Object.entries(this.allocation_data[key].data).forEach(([i, val]) => {
				if (this.allocation_data[key].label == 'Bonds') {
					this.bonds_value =  this.bonds_value + this.allocation_data[key].data[i].value
				} else {
					this.stocks_value = this.stocks_value + this.allocation_data[key].data[i].value
				}
			})
		})
		//this.totalAllocation = (this.bonds_value + this.stocks_value);
	}
	ngAfterViewInit() {
	    this.updateChart();
	}
	clickSuggestion(val,id,type) {
		if (type == 'bonds'){
			this.allocation_data[0].data['push']({
				security_name : val,
				asset_class : 'Global Short Bonds',
				security_id : id,
				color: this.randomColor(),
				value : 10
      });
		}else{
			this.allocation_data[1].data['push']({
				security_name : val,
				asset_class : id == 'SAVLX' ? 'U.S. Large Value Stocks' : 'U.S. Small Value Stocks',
				security_id : id,
				color: this.randomColor(),
				value : 10
      });
		}
		this.getTotal();
		console.log(this.allocation_data)
		this.showSuggestion = false;
		this.haveAllocationData = true;
		this.updateGroupVal();
	}
	setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.icon = this.reverse ? 'down' : 'up';
    console.log(value)
    this.order = value;
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
	
	randomColor(){
		return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	}
	NotificationMessage(){
		if (this.totalAllocation !== 100) {
			this.alertMessage = this.totalAllocation < 100
				? ((100 - this.totalAllocation) == 1 ? "Need " : "Needs ") + " more allocation: " + (100 - this.totalAllocation)
				: isNaN(this.totalAllocation) ? "Invalid, allocation is NaN"
					: "Allocation " + ((this.totalAllocation - 100) == 1 ? "exceed " : "exceeds ") + "up to: " + (this.totalAllocation - 100);
			this.hideMessage(false)
			this.onSave = false;
		} else {
			this.hideMessage(true)
			this.alertMessage = ""
			this.onSave = isNaN(this.totalAllocation) ? false : true;
			return true
		}
		this.totalAllocation == 0 ? this.hideMessage(true) :'';
	}
	
	hideMessage(args){
		if (args){
			$('.allocation-alert').fadeOut('fast');
		}else{
			$('.allocation-alert').fadeIn('fast');
		}
	}
	saveEvent() {
		if (this.NotificationMessage()){
			this.modalStatus.SET_viewPortfolio(false);
		this.data.SET_proposal_show_btnNext(true);
		}
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
		let x = 0;
		Object.entries(this.allocation_data).forEach(([key, val]) => {
			Object.entries(this.allocation_data[key].data).forEach(([i, val]) => {
				this.data_number[x] = this.allocation_data[key].data[i].value
				this.data_label[x] = this.allocation_data[key].data[i].asset_class
				this.data_color[x] = this.allocation_data[key].data[i].color == '' ? this.randomColor() :this.allocation_data[key].data[i].color
				this.allocation_data[key].data[i].color = this.data_color[x];
				x= x+1;
			})
		})
		const chart_data = {
	      labels: this.data_label,
	      datasets: [{
	          fill: true,
	          data: this.data_number,
	          borderWidth: 0,
	          backgroundColor : this.data_color
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
		
		this.getTotal();
		this.updateChart();
		this.updateRiskStatus(this.targetRange, this.totalAllocation)
		this.NotificationMessage()
	}
	removeRow(event, value, i, identifier) {
		$(event.target).closest('tr').fadeOut();
		this.totalAllocation = ( this.totalAllocation - value );
		identifier == 0 ? this.allocation_data[0].data.splice(i,1) : this.allocation_data[1].data.splice(i,1);
		this.updateChart();
		this.NotificationMessage()
		this.getTotal();
	}
	changeName($event){
		this.targetRiskName = $event;
	}
	changeRange($event){
		this.targetRange = $event;
		this.updateRiskStatus($event, this.totalAllocation);
	}
	updateRiskStatus(range, total){
		let data = range.split('-');
		if (!isNaN(total)){
			( total >= parseInt(data[0]) && total <= parseInt(data[1]) ) 
				?  $('.risk-score').css('color', 'green')
				: $('.risk-score').css('color', 'red')
		}
		console.log(this.riskStatusDanger)
	}
}
