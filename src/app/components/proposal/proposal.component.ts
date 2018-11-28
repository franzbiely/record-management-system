import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
	currentPage : number = 0;
	toHousehold() {
		this.router.navigateByUrl('create-household');
	}
	nextReceiver() {
	    this.currentPage++;
	  }
  constructor(private router: Router) { }


  ngOnInit() {
  }

}
