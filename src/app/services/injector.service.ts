import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from "@angular/core";

declare var jquery: any;
declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class InjectorService {
    public childComponentRef: any;
    private parentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    public init(
        parentRef: string,
        childRef: any
    ) {
        const childComponent = this.componentFactoryResolver
            .resolveComponentFactory( childRef )
            .create(this.injector);

        this.parentRef = parentRef;
        this.childComponentRef = childComponent;

        return this;
    }

    public inject(
        isAppend: boolean,
        wrapEl: any
    ) {
        this.appRef.attachView( this.childComponentRef.hostView );

        const element = (this.childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        const parentRef = $(document).find( this.parentRef );

        if ( parentRef.length ) {
            parentRef.append( element );
        }
    }
}
