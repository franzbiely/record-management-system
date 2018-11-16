import { Component} from '@angular/core';

export interface Lists{
  open: boolean;
  name: string;
  id: number;
  value: number;
  num: number;
  state: string;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  [data: string] : any;
}


const DATA_LIST: Lists[] = [
  {  
     open: false,
     name: "Candelaria Household",
     id: 3456, 
     value: 917000, 
     num: 2, 
     state: "active", 
     created: "7/31/3018 | 3:30 PM", 
     createdBy: "jennica fernen", 
     updated: "7/31/3018 | 3:30 PM",
     updatedBy: "jennica fernen",
     data: [
        {
           name: "Chris & Kristy Retirement Proposal",
           id: 3457,
           value: 800000,
           state: "implemented",
           created: "7/31/2018 | 3:30 PM",
           createdBy: "Jennica Fernen",
           updated: "7/31/2018 | 3:30 PM",
           updatedBy: "Jennica Fernen"
        },
        {
            name: "Chris & Kristy Retirement Proposal",
            id: 3457,
            value: 800000,
            state: "implemented",
            created: "7/31/2018 | 3:30 PM",
            createdBy: "Jennica Fernen",
            updated: "7/31/2018 | 3:30 PM",
            updatedBy: "Jennica Fernen"
         }
     ]
  },
  {  
     open: false,
     name: "Fernen Household",
     id: 3495, 
     value: 300000, 
     num: 3, 
     state: "active", 
     created: "7/31/3018 | 3:30 PM", 
     createdBy: "jennica fernen", 
     updated: "7/31/3018 | 3:30 PM",
     updatedBy: "jennica fernen" 
  },
  {  
    open: false,
    name: "Mackrill Household",
    id: 9384, 
    value: 2000000, 
    num: 3, 
    state: "active", 
    created: "7/31/3018 | 3:30 PM", 
    createdBy: "jennica fernen", 
    updated: "7/31/3018 | 3:30 PM",
    updatedBy: "jennica fernen" 
 },
 {  
    open: false,
    name: "Atkinson Family",
    id: 4850, 
    value: 1000000, 
    num: 3, 
    state: "active", 
    created: "7/31/3018 | 3:30 PM", 
    createdBy: "jennica fernen", 
    updated: "7/31/3018 | 3:30 PM",
    updatedBy: "jennica fernen" 
 },
 {  
    open: false,
    name: "Matthews Foundation",
    id: 3034, 
    value: 1000000, 
    num: 3, 
    state: "active", 
    created: "7/31/3018 | 3:30 PM", 
    createdBy: "jennica fernen", 
    updated: "7/31/3018 | 3:30 PM",
    updatedBy: "jennica fernen" 
 },
 {  
    open: false,  
    name: "Johnson Household",
    id: 3948, 
    value: 2000000, 
    num: 3, 
    state: "active", 
    created: "7/31/3018 | 3:30 PM", 
    createdBy: "jennica fernen", 
    updated: "7/31/3018 | 3:30 PM",
    updatedBy: "jennica fernen" 
 },
 {  
    open: false,
    name: "Rhode Trust",
    id: 3948, 
    value: 2000000, 
    num: 3, 
    state: "active", 
    created: "7/31/3018 | 3:30 PM", 
    createdBy: "jennica fernen", 
    updated: "7/31/3018 | 3:30 PM",
    updatedBy: "jennica fernen" 
},
{  
  open: false,
  name: "Campbell Household",
  id: 3948, 
  value: 2000000, 
  num: 3, 
  state: "active", 
  created: "7/31/3018 | 3:30 PM", 
  createdBy: "jennica fernen", 
  updated: "7/31/3018 | 3:30 PM",
  updatedBy: "jennica fernen" 
},
{  
  open: false,
  name: "Douglas Corporation",
  id: 3348, 
  value: 2000000, 
  num: 3, 
  state: "active", 
  created: "7/31/3018 | 3:30 PM", 
  createdBy: "jennica fernen", 
  updated: "7/31/3018 | 3:30 PM",
  updatedBy: "jennica fernen" 
},
{  
  open: false,
  name: "Williams Household",
  id: 3548, 
  value: 2000000, 
  num: 3, 
  state: "active", 
  created: "7/31/3018 | 3:30 PM", 
  createdBy: "jennica fernen", 
  updated: "7/31/3018 | 3:30 PM",
  updatedBy: "jennica fernen" 
},

];

@Component({
  selector: 'app-list-view-screen',
  templateUrl: './list-view-screen.component.html',
  styleUrls: ['./list-view-screen.component.scss'],
  

})


export class ListViewScreenComponent  {
  lists = DATA_LIST;
  expandedElement:  Lists;
  
}

