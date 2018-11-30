import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

declare var jquery:any;
declare var $ :any;

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    constructor( private domService: DomService ) {}

    private modalElementId   = '#modal-box';
    private overlayElementId = '#modal-overlay';

    init( component: any, append: boolean, inputs: object, outputs: object ){
        let componentConfig = {
            inputs:inputs,
            outputs:outputs
        }

        this.domService.appendComponentTo( this.modalElementId, component, append, componentConfig );
        
        $(document).find( this.modalElementId ).addClass( 'active' );
        $(document).find( this.overlayElementId ).addClass( 'active' );
    }

    destroy() {
        this.domService.removeComponent();

        $(document).find( this.modalElementId ).removeClass( 'active' );
        $(document).find( this.overlayElementId ).removeClass( 'active' );
    }
}