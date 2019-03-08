import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalStatusService } from "../../services/modal-status.service"
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  inputs: ["expandedElement"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListViewComponent implements OnInit {
  hasData:boolean = true;
  @Input() addLabel:string;
  @Input() lists:any[];
  openHousehold: boolean = false;

  icon: string = 'down';
  order: string = 'name';
  reverse: boolean = false;
  sortedCollection: any[];

  constructor(private modalStatus: ModalStatusService, private orderPipe: OrderPipe) { 

    this.sortedCollection = orderPipe.transform(this.lists, 'name');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
    this.modalStatus.household.subscribe(value => this.openHousehold = value);
    console.log(this.lists);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.icon = this.reverse ? 'down' : 'up';
    console.log(value)
    this.order = value;
  }

  openHouseHoldModal() {
    this.modalStatus.SET_household(true);
  }

}
