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

	private accountDetailsTypeSource = new BehaviorSubject<string>('quantity');
	public accountDetailsType = this.accountDetailsTypeSource.asObservable();
	SET_accountDetailsType(value: string) {
	  	this.accountDetailsTypeSource.next(value);
	}

	private portfolioPopupTypeSource = new BehaviorSubject<string>('view');
	public portfolioPopupType = this.portfolioPopupTypeSource.asObservable();
	SET_portfolioPopupType(value: string) {
	  	this.portfolioPopupTypeSource.next(value);
	}

	private proposalStepsSource = new BehaviorSubject<number>(0);
	public proposalSteps = this.proposalStepsSource.asObservable();
	SET_proposalSteps(value: number) {
	  	this.proposalStepsSource.next(value);
	}

	private householdHaveDataSource = new BehaviorSubject<boolean>(false);
	public householdHaveData = this.householdHaveDataSource.asObservable();
	SET_householdHaveData(value: boolean) {
	  	this.householdHaveDataSource.next(value);
	}

	private enableAccountInfoSource = new BehaviorSubject<boolean>(false);
	public enableAccountInfo = this.enableAccountInfoSource.asObservable();
	SET_enableAccountInfo(value: boolean) {
	  	this.enableAccountInfoSource.next(value);
	}

  constructor() { }
}
