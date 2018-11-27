import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-household-member',
  templateUrl: './household-member.component.html',
  styleUrls: ['./household-member.component.scss']
})
export class HouseholdMemberComponent implements OnInit {

  @Output() closeMeEvent = new EventEmitter<boolean>();

  memberCount = 1;
  closeMe($event) {
    this.closeMeEvent.emit($event)
  }
  addMember() {
    this.memberCount++;
  }
  constructor() { }

  ngOnInit() {
  }

}
