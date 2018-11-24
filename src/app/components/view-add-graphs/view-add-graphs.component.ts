import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-add-graphs',
  templateUrl: './view-add-graphs.component.html',
  styleUrls: ['./view-add-graphs.component.scss'],
  inputs: ["modal"]

})
export class ViewAddGraphsComponent implements OnInit {

 @Output() closeMeEvent = new EventEmitter<boolean>();

  closeMe() {
    this.closeMeEvent.emit(true)
  }
  
  cancelReceiver($event) {
    this.closeMe();
  }
  saveReceiver($event) {
    alert('Saving!');
    this.closeMe();
  }
  constructor() { }

  ngOnInit() {

  }

}
