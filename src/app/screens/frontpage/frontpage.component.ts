import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-frontpage',
    templateUrl: './frontpage.component.html',
    styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
    reportBoard: any = {
        s: 'show',
        t: 'Hide'
    };

    panes: any = [];
    charts: any = [ 'aum', 'default', 'ipo', 'tvpm', 'tvpr', 'tvpp', 'pdo', 'tvps', 'cps' ];

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
}