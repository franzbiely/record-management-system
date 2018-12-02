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
    providedIn: "root"
})
export class DomService {
    private childComponentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    public appendComponentTo(
        parentId: string,
        child: any,
        isAppend: boolean,
        childConfig?: childConfig
    ) {
        // Create a component reference from the component
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);

        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);

        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);

        // Get DOM element from component
        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<
            any
        >).rootNodes[0] as HTMLElement;

        // Append DOM element to the body
        if (isAppend) {
            $(document)
                .find(parentId)
                .append(childDomElem);
        } else {
            $(document)
                .find(parentId)
                .html(childDomElem);
        }
    }

    public removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    }

    private attachConfig(config, componentRef) {
        let inputs = config.inputs;
        let outputs = config.outputs;

        componentRef.instance["inputs"] = inputs;
        componentRef.instance["outputs"] = outputs;
    }
}
interface childConfig {
    inputs: object;
    outputs: object;
}