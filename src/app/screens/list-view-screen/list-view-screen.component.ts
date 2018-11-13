import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view-screen',
  templateUrl: './list-view-screen.component.html',
  styleUrls: ['./list-view-screen.component.scss']
})
export class ListViewScreenComponent implements OnInit {

  constructor() { }

  list = [
    {  name: "Justin", lastname: "Cedeno", age: 21},
    {  name: "Mariah", lastname: "Carrieh", age: 100}
  ];

  ngOnInit() {
  }

}
