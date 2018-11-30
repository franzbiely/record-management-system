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

	private proposal_risk_stepSource = new BehaviorSubject<number>(1);
	public proposal_risk_step = this.proposal_risk_stepSource.asObservable();
	SET_proposal_risk_step(value: number) {
	  	this.proposal_risk_stepSource.next(value);
	}

	private simulationGoalSource = new BehaviorSubject<string>('Retirement');
	public simulationGoal = this.simulationGoalSource.asObservable();
	SET_simulationGoal(value: string) {
	  	this.simulationGoalSource.next(value);
	}


  constructor() { }
}
