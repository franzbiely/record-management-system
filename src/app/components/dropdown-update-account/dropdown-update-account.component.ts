import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-dropdown-update-account',
  templateUrl: './dropdown-update-account.component.html',
  styleUrls: ['./dropdown-update-account.component.scss']
})
export class DropdownUpdateAccountComponent implements OnInit {
	@Input() type : string;
	selected_title = 'Retirement';
  // @ViewChild('details') details:ElementRef;

  constructor(private data: DataService) { }

  ngOnInit() {

  }
  chooseEvent($title, $e) {
  	this.selected_title = $title;
    $('details').removeAttr('open');
    if(this.type === 'simulation-goal') {
      this.data.SET_simulationGoal($title);

    }
  }
}
