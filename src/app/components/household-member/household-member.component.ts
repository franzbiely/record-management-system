import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  save() {
    this.router.navigateByUrl('/create-household');
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
