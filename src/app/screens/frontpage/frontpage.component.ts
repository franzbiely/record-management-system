import { Component, OnInit, Input } from '@angular/core';
import { DomService } from '../../dom.service';

import { GraphProposalsComponent } from '../../components/graph-proposals/graph-proposals.component';

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

    constructor( private domService: DomService ) {}

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
        this.domService.appendComponentTo( '#report-panes', GraphProposalsComponent, true, {});
    }
}