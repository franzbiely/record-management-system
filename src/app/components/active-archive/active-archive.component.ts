import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-archive',
  templateUrl: './active-archive.component.html',
  styleUrls: ['./active-archive.component.scss']
})
export class ActiveArchiveComponent implements OnInit {
	@Input() type : string;
  constructor() { }

  ngOnInit() {
  }

}
