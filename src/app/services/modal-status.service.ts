import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ModalStatusService {

	private importAccountSource = new BehaviorSubject<boolean>(false);
	private accountDetailsSource = new BehaviorSubject<boolean>(false);
  private riskSendFormSource = new BehaviorSubject<boolean>(false);


	public importAccount = this.importAccountSource.asObservable();
	public accountDetails = this.accountDetailsSource.asObservable();
  public riskSendForm = this.riskSendFormSource.asObservable();

  constructor() { }

  toggleImportAccount(value: boolean) {
  	this.importAccountSource.next(value);
  }

  toggleAccountDetails(value: boolean) {
  	this.accountDetailsSource.next(value);
  }

  toggleRiskSendForm(value: boolean) {
    this.riskSendFormSource.next(value);
  }
}
