import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-frontpage',
    templateUrl: './frontpage.component.html',
    styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
    isNew : boolean = false;
  
    reportBoard: any = {
        s: 'show',
        t: 'Hide'
    };

    panes: any = [];
    charts: any = [ 'aum', 'default', 'ipo', 'tvpm', 'tvpr', 'tvpp', 'pdo', 'tvps', 'cps' ];
    openHousehold : boolean = false;
    households = Household; 

    constructor() {}

    ngOnInit() {
    }

    reportBoardToggle() {
        if ( this.reportBoard.s === 'show' ) {
            this.reportBoard.s = 'hide';
            this.reportBoard.t = 'Show';
        } else {
            this.reportBoard.s = 'show';
            this.reportBoard.t = 'Hide';
        }
    }

    addAnalyticsBox() {
        $(document).find( '.rms-analytics-selector,.rms-analytics-actions' ).toggleClass( 'active' );
    }

    selectAnalyticsBox(event) {
        const element = $( event.target );

        element.parent().toggleClass( 'active' );
    }

    saveAnalyticsBox() {
        const boxes = $(document).find( '.analytics-box.active' );
        var panes = [];

        if ( !boxes.length ) {
            return;
        }

        boxes.each(function(i, element ) {
            const rtype = $( element ).attr( 'id' );

            panes.push( rtype );
        });

        this.panes = panes;

        $(document).find( '.rms-analytics-selector,.rms-analytics-actions' ).removeClass( 'active' );
    }

    household($event) {
        this.openHousehold = $event;
        this.isNew = false;
    }
}

export interface Households{
  name: string;
  value: number;
  date: string;
}

export interface Proposals{
  name: string;
  subname: string;
  value: number;
  action: string;
}

export interface Documents{
  imgsrc: string;
  name: string;
  subname: string;
  date: string;
  action: string;
}

const Household:Households[] = [
  {name: "Candelaria Household", value: 917000, date: "7/31/2018"},
  {name: "Fernen Household", value: 300000, date: "7/31/2018"},
  {name: "Mackrill Household", value: 2000000, date: "7/31/2018"},
  {name: "Atkinson Family", value: 500000, date: "7/31/2018"},
  {name: "Matthews Foundation", value: 50000, date: "7/31/2018"},
];