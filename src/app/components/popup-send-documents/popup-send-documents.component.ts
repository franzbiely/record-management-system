import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-send-documents',
  templateUrl: './popup-send-documents.component.html',
  styleUrls: ['./popup-send-documents.component.scss']
})
export class PopupSendDocumentsComponent implements OnInit {
	public step:number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
  	this.step++;
  }
  toDash() {
    this.router.navigateByUrl('/dashboard');
  }
  toList() {
    this.router.navigateByUrl('/list-view');
  }
  toHhold() {
    this.router.navigateByUrl('/create-household');
  }
}
