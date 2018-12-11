import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions-portfolio',
  templateUrl: './dropdown-actions-portfolio.component.html',
  styleUrls: ['./dropdown-actions-portfolio.component.scss']
})
export class DropdownActionsPortfolioComponent implements OnInit {

  @Output() modifyEvent = new EventEmitter<boolean>();
  @Output() viewEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
  modifyFunc() {
  	this.modifyEvent.emit(true);
  }
  viewFunc() {
  	this.viewEvent.emit(true);
  }

}
