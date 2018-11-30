import { Component, OnInit } from "@angular/core";

declare var jquery:any;
declare var $ :any;

@Component({
    selector: "app-print-preview",
    templateUrl: "./print-preview.component.html",
    styleUrls: ["./print-preview.component.scss"]
})
export class PrintPreviewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.setContent();
    }

    setContent() {
        const header  = $( '.rpp-header' );
        const content = $( '.rpp-content' );

        content.css( 'margin-top', header.outerHeight() );

        $( 'body' ).css( 'background-color', '#CCCCCC' );
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
        const etarget = 'rpp-content-page-' + evalue;

        if ( isNaN( evalue ) ) {
            alert( 'Input a number' );
        } else {

        }
    }
}
