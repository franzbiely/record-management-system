import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-add-graphs',
  templateUrl: './view-add-graphs.component.html',
  styleUrls: ['./view-add-graphs.component.scss'],
  inputs: ["modal"]

})
export class ViewAddGraphsComponent implements OnInit {

  modal : boolean = false;
  constructor() { }

  ngOnInit() {

  }

  openModal(e){
    this.modal = e;
  }

}
