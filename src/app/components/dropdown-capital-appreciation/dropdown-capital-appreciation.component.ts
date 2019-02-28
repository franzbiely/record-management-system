import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-dropdown-capital-appreciation',
  templateUrl: './dropdown-capital-appreciation.component.html',
  styleUrls: ['./dropdown-capital-appreciation.component.scss']
})
export class DropdownCapitalAppreciationComponent implements OnInit {
  dropdown_active : boolean;
  riskName : string = "TARGET RISK NAME";
  riskRange : string = "0";

  constructor() { }
  @Output() targetRange = new EventEmitter<string>();
  @Output() targetRiskName = new EventEmitter<string>();
  ngOnInit() {
  }
  passDataToTheParent(name, range){
    console.log(name, range)
     this.targetRiskName.emit(name)
     this.targetRange.emit(range)
     this.riskName = name;
     this.riskRange = range; 
  }
}
