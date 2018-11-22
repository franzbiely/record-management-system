import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  constructor(private router: Router) { }
  toDashboard() {
  	this.router.navigateByUrl('/dashboard');
  }
  ngOnInit() {
  }

}
