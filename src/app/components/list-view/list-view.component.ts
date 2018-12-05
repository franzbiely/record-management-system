import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  inputs: ["lists", "expandedElement"],
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
  openHousehold: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }


  columns = ["name", "id", "$ value", "#", "state/status", "created", "last updated", "actions"];

  ngOnInit() {
    this.modalStatus.household.subscribe(value => this.openHousehold = value);
  }

  openHouseHoldModal() {
    this.modalStatus.SET_household(true);
  }

}
