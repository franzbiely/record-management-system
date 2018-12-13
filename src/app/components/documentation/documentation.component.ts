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
    if ($(event.target).parent().hasClass('expanded')) {
      this.documentIsOpen = false;
      $('.btn-text').removeClass('expanded');
    } else {
      $('.btn-text').removeClass('expanded');
      // console.log($(event.target))
      $(event.target).parent().addClass('expanded');
      // this.renderer.setElementClass(event.target, 'expanded', true);
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

    //   //mobile
      $('.btn-text .right-section-container').remove();
      $('.right-section-container').clone().appendTo($(event.target).parent());
    }
    
    // console.log($(event.target));
  }

  orientToggler(event: any) {
    $('.orient-container').removeClass('active');
    $(event.target).closest('.orient-container').addClass('active');
    // if ($(event.target).closest('.orient-container').hasClass('active')) {
    //   $('.orient-container').removeClass('active');
    // } else {
    //   $('.orient-container').removeClass('active');
    //   this.renderer.setElementClass(event.target, 'active', true);
    // }
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


