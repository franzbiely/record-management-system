import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss']
})
export class QuickAddComponent implements OnInit {
  accountDetailsType: string = '';
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.accountDetailsType.subscribe(value => this.accountDetailsType = value);
  }

}
