import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

	isSidebarOpen : boolean = true;
  goalType : string = 'Retirement';
  isCurrentActive : boolean = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.simulationGoal.subscribe(value => this.goalType = value);
  }

  closeSidebar() {
  	this.isSidebarOpen = false;
  }
  openSidebar() {
  	this.isSidebarOpen = true;
    this.isCurrentActive = false;
  }

  hideCurrent() {
    this.isCurrentActive = false;
    this.isSidebarOpen = false;
  }
}
