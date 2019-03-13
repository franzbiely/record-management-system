import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-action-simulation',
  templateUrl: './dropdown-action-simulation.component.html',
  styleUrls: ['./dropdown-action-simulation.component.scss']
})
export class DropdownActionSimulationComponent implements OnInit {
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
