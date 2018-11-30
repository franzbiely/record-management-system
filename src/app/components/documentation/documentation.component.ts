import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextReceiver() {
  	this.router.navigateByUrl('/print-preview');
  }

}


