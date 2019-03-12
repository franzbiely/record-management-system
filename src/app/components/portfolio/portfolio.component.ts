import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	viewPortfolioModal : boolean = false;
  portfolioPopType : string|'view'|'edit' = 'view';
  dropdown_active : boolean = false;
  btnNext : boolean = false;

  order: string = 'name';
  reverse: boolean = false;
  sortedCollection: any[];

  array = [
    {
      'name': 'Example Advisor Capital Appreciation - Sustainability 1',
      'target': {
              'name' :'Capital Appreciation 1',
              'value' : '87-100 (80)'
            },
      'group' : 'Example Advisor Portfolios 1'
    },
    {
      'name': 'Example Advisor Capital Appreciation - Sustainability 2',
      'target': {
              'name' :'Capital Appreciation 2',
              'value' : '87-100 (80)'
            },
      'group' : 'Example Advisor Portfolios 2'
    },
    {
      'name': 'Example Advisor Capital Appreciation - Sustainability 3',
      'target': {
              'name' :'Capital Appreciation 3',
              'value' : '87-100 (80)'
            },
      'group' : 'Example Advisor Portfolios 3'
    }
  ]

  constructor(private modalStatus: ModalStatusService, private data: DataService, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.array, 'name');
  }

  ngOnInit() {
  	this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
    // this.data.SET_proposalSteps(2);
    // this.data.SET_proposal_show_btnNext(false);
  }
  viewEventReciever(event) {
    this.data.SET_portfolioPopupType('view');
  	this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }
  modifyEventReciever(event) {
    this.data.SET_portfolioPopupType('edit');
    this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }
  selectRow() {
    this.data.SET_proposal_show_btnNext(true);
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    console.log(value)
    this.order = value;
  }
  set_dropdown_active(val) {
    this.dropdown_active = val;
  }
}
