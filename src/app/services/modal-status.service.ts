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

  private viewPortfolioSource = new BehaviorSubject<boolean>(false);
  public viewPortfolio = this.viewPortfolioSource.asObservable();
  SET_viewPortfolio(value: boolean) {
    this.viewPortfolioSource.next(value);
  }

  private editPortfolioSource = new BehaviorSubject<boolean>(false);
  public editPortfolio = this.editPortfolioSource.asObservable();
  SET_editPortfolio(value: boolean) {
    this.editPortfolioSource.next(value);
  }

  private assetClassSource = new BehaviorSubject<boolean>(false);
  public assetClass = this.assetClassSource.asObservable();
  SET_assetClass(value: boolean) {
    this.assetClassSource.next(value);
  }

  private allocationDetailsSource = new BehaviorSubject<boolean>(false);
  public allocationDetails = this.allocationDetailsSource.asObservable();
  SET_allocationDetails(value: boolean) {
    this.allocationDetailsSource.next(value);
  }

  private sendDocumentSource = new BehaviorSubject<boolean>(false);
  public sendDocument = this.sendDocumentSource.asObservable();
  SET_sendDocument(value: boolean) {
    this.sendDocumentSource.next(value);
  }
  constructor() { }
  
}
