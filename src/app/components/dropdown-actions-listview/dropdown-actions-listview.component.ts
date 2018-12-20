import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions-listview',
  templateUrl: './dropdown-actions-listview.component.html',
  styleUrls: ['./dropdown-actions-listview.component.scss']
})
export class DropdownActionsListviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viewFunc() {
  	this.viewEvent.emit(true);
  }
  modifyFunc() {
  	this.modifyEvent.emit(true);
  }

  @Output() viewEvent = new EventEmitter<boolean>();
  @Output() modifyEvent = new EventEmitter<boolean>();



}
