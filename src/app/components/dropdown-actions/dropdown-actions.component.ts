import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent implements OnInit {

  haveEdit : boolean = false;
  haveView : boolean = false;
  haveModify : boolean = false;
  haveDuplicate : boolean = false;
  haveDelete : boolean = false;
  haveViewFactSheet : boolean = false;
  @Input() type : 'account';


	viewFunc() {
		this.viewEvent.emit(true);
	}
	@Output() viewEvent = new EventEmitter<boolean>();

  modifyFunc() {
    this.modifyEvent.emit(true);
  }
  @Output() modifyEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    switch(this.type) {
      case 'account' : 
        this.haveEdit = true;
        this.haveView = true;
        this.haveDelete = true;
        break;
      default : 
        this.haveEdit = true;
        this.haveView = true;
        this.haveModify = true;
        this.haveDuplicate = true;
        this.haveDelete = true;
        this.haveViewFactSheet = true;
    }
  }

}
