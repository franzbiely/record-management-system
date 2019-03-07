import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions-listview',
  templateUrl: './dropdown-actions-listview.component.html',
  styleUrls: ['./dropdown-actions-listview.component.scss']
})
export class DropdownActionsListviewComponent implements OnInit {
  add_proposal = false;
  change_portfolio = false;
  delete = false;
  duplicate = false;
  @Input() household = false;
  constructor() { }

  ngOnInit() {
    this.add_proposal = true;
    this.change_portfolio = true;
    this.delete = true;
    if (this.household == true) { 
      this.add_proposal = false;
      this.change_portfolio = false;
      this.duplicate = true;
    }

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
