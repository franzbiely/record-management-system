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
  isChecked = false;
  isIndeterminate = false;
  expandedDocs: string;

  documents = [
    'Proposal',
    'GAP Analysis',
    'Investment Policy Statement',
    'Portfolio Allocation Statement',
    'Proposal Assumptions Summary',
    'Account Opening Checklist',
    'Risk Assessment Questionnaire',
  ];


  constructor(private router: Router, private renderer: Renderer) { }

  ngOnInit() {
  }

  nextReceiver() {
    this.router.navigateByUrl('/print-preview');
  }

  openDocument(event: any, type) {
    if(event.checked) {
      this.expandedDocs = type;
      this.documentIsOpen = true;
      switch(type) {
        case 'Proposal' : {
          this.document_type = 'prop';
          break;
        }
        case 'GAP Analysis' : {
          this.document_type = 'gap';
          break;
        }
        case 'Investment Policy Statement' : {
          this.document_type = 'inv';
          break;
        }
        case 'Portfolio Allocation Statement' : {
          this.document_type = 'port';
          break;
        }
        case 'Proposal Assumptions Summary' : {
          this.document_type = 'pas';
          break;
        }
        case 'Account Opening Checklist' : {
          this.document_type = 'aoc';
          break;
        }
        case 'Risk Assessment Questionnaire' : {
          this.document_type = 'raq';
          break;
        }
      }
      //mobile
      console.log($('#' + $(event)[0].source._uniqueId).closest('.btn-text'));
      console.log($('#mat-checkbox-2').parent());
      console.log($('#mat-checkbox-2').closest('.btn-text'));
      // console.log($('#' + event[0].source._uniqueId));
      $('.btn-text .right-section-container').remove();
      $('.right-section-container').clone().appendTo($('#' + $(event)[0].source._uniqueId).closest('.btn-text'));
    }
    else {
      this.documentIsOpen = false;
      this.expandedDocs = '';
    }
  }

  orientToggler(event: any) {
    $('.orient-container').removeClass('active');
    $(event.target).closest('.orient-container').addClass('active');
  }

  updateCheckboxes($event) {
    switch($event) {
      case 'all' : 
        this.isChecked = true;
        this.isIndeterminate = false;
        break;
      case 'none' : 
        this.isChecked = false;
        this.isIndeterminate = false;
        break;
      default : 
        this.isIndeterminate = true;
    }
  }
}


