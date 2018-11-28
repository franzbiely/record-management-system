import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private proposal_show_btnNextSource = new BehaviorSubject<boolean>(false);

	public proposal_show_btnNext = this.proposal_show_btnNextSource.asObservable();


	SET_proposal_show_btnNext(value: boolean) {
	  	this.proposal_show_btnNextSource.next(value);
	}

  constructor() { }
}
