import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ModalStatusService {

	private importAccountSource = new BehaviorSubject<boolean>(false);
	public importAccount = this.importAccountSource.asObservable();

  constructor() { }

  toggleImportAccount(value: boolean) {
  	this.importAccountSource.next(value);
  }
}
