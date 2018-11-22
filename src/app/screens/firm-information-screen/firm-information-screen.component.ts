import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firm-information-screen',
  templateUrl: './firm-information-screen.component.html',
  styleUrls: ['./firm-information-screen.component.scss']
})
export class FirmInformationScreenComponent implements OnInit {
	showDisclaimer: boolean = false;
  constructor() { }
  headerSidebarIsDisabled = true;
  ngOnInit() {
  }
  receiveFirmEndEvent($event) {
  	this.showDisclaimer = $event;
  }
}
