import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  inputs: ['households']
})
export class HomeComponent implements OnInit {


  analyticShow : boolean = false;
  openModal : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
