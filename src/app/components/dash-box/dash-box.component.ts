import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash-box',
  templateUrl: './dash-box.component.html',
  styleUrls: ['./dash-box.component.scss']
})
export class DashBoxComponent implements OnInit {
	@Input() isNew: boolean;
	@Input() title: string;
  @Input() subTitle: string;
	@Input() addLabel : string;
	@Input() data: any;
  @Input() addAction: Function;
  @Input() headerRightType: string;

  constructor() { }
  
  ngOnInit() {
  }

}
