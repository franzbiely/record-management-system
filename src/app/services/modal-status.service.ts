import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ModalStatusService {

	private importAccountSource = new BehaviorSubject<boolean>(false);
  public importAccount = this.importAccountSource.asObservable();
  toggleImportAccount(value: boolean) {
    this.importAccountSource.next(value);
  }

	private accountDetailsSource = new BehaviorSubject<boolean>(false);
  public accountDetails = this.accountDetailsSource.asObservable();
  toggleAccountDetails(value: boolean) {
    this.accountDetailsSource.next(value);
  }

  private riskSendFormSource = new BehaviorSubject<boolean>(false);
  public riskSendForm = this.riskSendFormSource.asObservable();
  toggleRiskSendForm(value: boolean) {
    this.riskSendFormSource.next(value);
  }

  private questionnaireSource = new BehaviorSubject<boolean>(false);
  public questionnaire = this.questionnaireSource.asObservable();
  toggleQuestionnaire(value: boolean) {
    this.questionnaireSource.next(value);
  }


  constructor() { }
  
}
