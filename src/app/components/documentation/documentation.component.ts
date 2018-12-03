import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent implements OnInit {
  documentIsOpen = false;
  document_type = 'prop';
  constructor(private router: Router, private renderer: Renderer) { }

  ngOnInit() {
  }

  nextReceiver() {
    this.router.navigateByUrl('/print-preview');
  }

  openDocument(event: any, type) {
    if ($(event.target).hasClass('expanded')) {
      this.documentIsOpen = false;
      $('.btn-text').removeClass('expanded');
    } else {
      $('.btn-text').removeClass('expanded');
      this.renderer.setElementClass(event.target, 'expanded', true);
      this.documentIsOpen = true;
      this.document_type = type;
    }
    
    console.log($(event.target));
  }

  orientToggler(event: any) {
    if ($(event.target).hasClass('active')) {
      $('.orient-container').removeClass('active');
    } else {
      $('.orient-container').removeClass('active');
      this.renderer.setElementClass(event.target, 'active', true);
    }
  }
}


