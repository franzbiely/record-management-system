import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  inputs: ["list"]
})
export class ListViewComponent implements OnInit {

  constructor() { }

displayedColumns = ["name", "lastname", "age"]

  ngOnInit() {
  }

}
