import { Component, OnInit } from "@angular/core";
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

declare var jquery:any;
declare var $ :any;

@Component({
    selector: "app-print-preview",
    templateUrl: "./print-preview.component.html",
    styleUrls: ["./print-preview.component.scss"]
})
export class PrintPreviewComponent implements OnInit {
    constructor(private modalStatus: ModalStatusService, private data: DataService) { }
    sendDocuments = false;
    sendDocumentModal : boolean = false;
    sendDocStatusModal : boolean = false;

    bookmarks = [
        'Proposal',
        'GAP Analysis',
        'Investment Policy Statement',
        'Portfolio Allocation Statement'
    ];
    ngOnInit() {
        this.modalStatus.sendDocument.subscribe(value => this.sendDocumentModal = value);
        this.modalStatus.sendDocumentStatus.subscribe(value => this.sendDocStatusModal = value);
    }

    ngAfterViewInit() {
        this.setContent();
    }

    setContent() {
        const header  = $( '.rpp-header' );
        const content = $( '.rpp-content' );

        content.css( 'margin-top', header.outerHeight() );
    }

    zoomIn() {
        const contentArea = <HTMLElement>document.querySelector( '.rpp-content' );
        const scale = ( contentArea.getBoundingClientRect().width / contentArea.offsetWidth ) + .1;

        contentArea.style.transform = 'scale(' + scale + ')';
    }

    zoomOut() {
        const contentArea = <HTMLElement>document.querySelector( '.rpp-content' );
        const scale = ( contentArea.getBoundingClientRect().width / contentArea.offsetWidth ) - .1;

        contentArea.style.transform = 'scale(' + scale + ')';
    }

    changeOrientation(o: string) {
        $( '.rpp-header-orientation span' ).removeClass( 'active' );

        if ( o === 'p' ) {
            $( '.rpp-orientation-p' ).addClass( 'active' );
        } else {
            $( '.rpp-orientation-l' ).addClass( 'active' );
        }
    }

    toggleBookmark(event) {
        const element = <HTMLElement>event.target;

        if ( !$( element ).parent().hasClass( 'active' ) ) {
            $( element ).parent().parent().children().removeClass( 'active' );
        }
        $( element ).parent().toggleClass( 'active' );
    }

    scrollToPage(event) {
        const element = <HTMLElement>event.target;
        const evalue  = $( element ).val();
        const etarget = '.rpp-content-page-' + evalue;

        if ( isNaN( evalue ) ) {
            alert( 'Input a number' );
        } else {
            if ( $( etarget ).length ) {
                $( 'html, body' ).animate({
                    scrollTop: $( etarget ).offset().top - 100
                }, 500 );
            }
        }
    }

    scrollToPageAlt( event ) {
        const element = <HTMLElement>event.target;
        const evalue  = $( element ).data( 'page' );
        const etarget = '.rpp-content-page-' + evalue;

        if ( isNaN( evalue ) ) {
            alert( 'Input a number' );
        } else {
            if ( $( etarget ).length ) {
                $( 'html, body' ).animate({
                    scrollTop: $( etarget ).offset().top - 100
                }, 500 );
            }
        }
    }

    save_send() {
        this.modalStatus.SET_sendDocument(true);
    }

    to_sendDocs_status() {
        this.data.SET_householdHaveData(true);
        this.modalStatus.SET_sendDocumentStatus(true);
        this.modalStatus.SET_sendDocument(false);
    }
}
