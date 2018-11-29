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
  constructor() { }
}
