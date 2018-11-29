import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DomService {
    private childComponentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    public appendComponentTo(parent: string, child: any) {
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory( child )
            .create( this.injector );
    
        this.childComponentRef = childComponentRef;

        this.appRef.attachView( childComponentRef.hostView );

        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        
        document.getElementById( parent ).appendChild( childDomElem );
    }
}