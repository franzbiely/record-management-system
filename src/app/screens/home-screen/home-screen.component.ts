import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  analyticShow : boolean = false;
  openModal : boolean = false;
  
  households = Household;

  constructor() { }

  ngOnInit() {
  }

}

export interface Households{
  name: string;
  value: number;
  date: string;
}

export interface Proposals{
  name: string;
  subname: string;
  value: number;
  action: string;
}

export interface Documents{
  imgsrc: string;
  name: string;
  subname: string;
  date: string;
  action: string;
}

const Household:Households[] = [
  {name: "Candelaria Household", value: 917000, date: "7/31/2018"},
  {name: "Fernen Household", value: 300000, date: "7/31/2018"},
  {name: "Mackrill Household", value: 2000000, date: "7/31/2018"},
  {name: "Atkinson Family", value: 500000, date: "7/31/2018"},
  {name: "Matthews Foundation", value: 50000, date: "7/31/2018"},
];

// const Proposal:Proposals[] = [
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
// ];