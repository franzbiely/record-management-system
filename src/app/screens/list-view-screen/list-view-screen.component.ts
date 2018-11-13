import { Component} from '@angular/core';

export interface Lists{
  name: string;
  lastname: string;
  age: number;
}

const DATA_LIST: Lists[] = [
  {  name: "Justin", lastname: "Cedeno", age: 21},
  {  name: "Mariah", lastname: "Carrieh", age: 100}
];

@Component({
  selector: 'app-list-view-screen',
  templateUrl: './list-view-screen.component.html',
  styleUrls: ['./list-view-screen.component.scss']
})


export class ListViewScreenComponent  {

  lists: DATA_LIST;

}

