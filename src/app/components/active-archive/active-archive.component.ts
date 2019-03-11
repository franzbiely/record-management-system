import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-archive',
  templateUrl: './active-archive.component.html',
  styleUrls: ['./active-archive.component.scss']
})
export class ActiveArchiveComponent implements OnInit {
  @Input() type : string;
  proposal :string = 'In Progress';
  proposalIcon :string = 'progress';
  main :string = 'Active';
  mainIcon :string = 'check';
  constructor() { }

  ngOnInit() {
  }

  onChangeProposal(value, icon){
    if (this.proposal != value) {
      this.proposal = value;
      this.proposalIcon = icon;
    }
  }
  onChangeMain(value, icon) {
    if (this.main != value) {
      this.main = value;
      this.mainIcon = icon;
    }
  }
}
