import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent implements OnInit {

  haveEdit : boolean = false;
  haveModify : boolean = false;
  haveView : boolean = false;
  haveDuplicate : boolean = false;
  haveDelete : boolean = false;
  haveViewFactSheet : boolean = false;
  @Input() type : 'account';
  @Input() toHide : boolean = false;


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
    $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      let $hasDetails = $(".dropdown-actions").find("details");
      if (!$clicked.parents().hasClass("dropdown-actions")){ $hasDetails.prop('open', false);}
      console.log($clicked)
    });
  }

}
