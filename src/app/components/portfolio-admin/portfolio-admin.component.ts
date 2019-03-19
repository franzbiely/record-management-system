import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";
import { DataService } from "../../services/data.service";
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-portfolio-admin',
  templateUrl: './portfolio-admin.component.html',
  styleUrls: ['./portfolio-admin.component.scss']
})
export class PortfolioAdminComponent implements OnInit {
  viewPortfolioModal: boolean = false;
  portfolioPopType : string|'view'|'edit' = 'view';


  order: string = 'name';
  reverse: boolean = false;
  sortedCollection: any[];

  array = [
    {
      'name': 'Example Advisors - Balanced Select 1',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 2',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 3',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 4',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 5',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 6',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 7',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 8',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 9',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 10',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 11',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 12',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    },
    {
      'name': 'Example Advisors - Balanced Select 13',
      'score': '29',
      'risk': {
        'name' :'Balanced',
        'value' : '30-43'
      },
      'group' : 'Example Advisors Portfolios'
    }
  ]

  constructor(private modalStatus: ModalStatusService, private data: DataService, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.array, 'name');
   }

  ngOnInit() {
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);

  }
  createEventReciever(event){
    this.data.SET_portfolioPopupType('new');
    this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
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
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    console.log(value)
    this.order = value;
  }

}
