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

  private sendDocumentStatusSource = new BehaviorSubject<boolean>(false);
  public sendDocumentStatus = this.sendDocumentStatusSource.asObservable();
  SET_sendDocumentStatus(value: boolean) {
    this.sendDocumentStatusSource.next(value);
  }

  private adviserSearchPopupSource = new BehaviorSubject<boolean>(false);
  public adviserSearchPopup = this.adviserSearchPopupSource.asObservable();
  SET_adviserSearchPopup(value: boolean) {
    this.adviserSearchPopupSource.next(value);
  }

  private firmInformationSource = new BehaviorSubject<boolean>(false);
  public firmInformation = this.firmInformationSource.asObservable();
  SET_firmInformation(value: boolean) {
    this.firmInformationSource.next(value);
  }

  private householdSource = new BehaviorSubject<boolean>(false);
  public household = this.householdSource.asObservable();
  SET_household(value: boolean) {
    this.householdSource.next(value);
  }

// --------------------------

  private popupLandingDefaultSource = new BehaviorSubject<boolean>(false);
  public popupLandingDefault = this.popupLandingDefaultSource.asObservable();
  SET_popupLandingDefault(value: boolean) {
    this.popupLandingDefaultSource.next(value);
  }

  private emailLangSource = new BehaviorSubject<boolean>(false);
  public emailLang = this.emailLangSource.asObservable();
  SET_emailLang(value: boolean) {
    this.emailLangSource.next(value);
  }

  private docuLangSource = new BehaviorSubject<boolean>(false);
  public docuLang = this.docuLangSource.asObservable();
  SET_docuLang(value: boolean) {
    this.docuLangSource.next(value);
  }

  constructor() { }
  
}
