import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.scss']
})
export class AddSecurityComponent implements OnInit {
	@Input() isEdit : boolean = false;
	@Output() isEditEvent = new EventEmitter<boolean>();

	toggleModify($event) {
		console.log('toggleModify', $event.checked);
		this.isEdit = $event.checked;
		this.isEditEvent.emit($event.checked)
		
	}
  constructor() { }

  ngOnInit() {
  }

}
