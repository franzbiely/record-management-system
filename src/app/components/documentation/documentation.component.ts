import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent implements OnInit {
  documentIsOpen = false;
  constructor(private router: Router, private renderer: Renderer) { }

  ngOnInit() {
  }

  nextReceiver() {
    this.router.navigateByUrl('/print-preview');
  }

  openDocument(event: any) {
    this.renderer.setElementClass(event.target, 'expanded', true);
    this.documentIsOpen = true;
  }
}


