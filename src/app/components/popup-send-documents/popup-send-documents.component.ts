import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-send-documents',
  templateUrl: './popup-send-documents.component.html',
  styleUrls: ['./popup-send-documents.component.scss']
})
export class PopupSendDocumentsComponent implements OnInit {
	public step:boolean = 1;
  constructor() { }

  ngOnInit() {
  }

  next() {
  	this.step++;
  }
}
