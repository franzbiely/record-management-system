import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-save',
  templateUrl: './cancel-save.component.html',
  styleUrls: ['./cancel-save.component.scss']
})
export class CancelSaveComponent implements OnInit {
  @Input() containerStyle: string;
  @Input() primaryLabel: string;
  cancelFunc() {
  	this.cancelEvent.emit(true);
  }
  saveFunc() {
  	this.saveEvent.emit(true);
  }

  @Output() cancelEvent = new EventEmitter<boolean>();
  @Output() saveEvent = new EventEmitter<boolean>();



  constructor() { }
  
  
  ngOnInit() {}

}
