import { Directive, IterableDiffers, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appDomfor]'
})
export class DomforDirective {
    private collection: any;

    constructor(private differs: IterableDiffers) { }

    @Input() set domFor( dom: any ) {
        this.collection = dom;
        if ( dom ) {
            this.differs.find( dom );
        }
    }

}
