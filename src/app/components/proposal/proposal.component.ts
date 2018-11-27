import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

	toHousehold() {
		this.router.navigateByUrl('create-household');
	}

  constructor(private router: Router) { }


  ngOnInit() {
  }

}
