import { SimpleComponent } from "./simple-component";

/** A writable class holds a alias property to change the elements' textContent and extends SimpleComponent */
export class WritableComponent extends SimpleComponent {

    constructor(selector) {
        super(selector);
    }
    /** get proprety sets the function as a getter, you can use as writableComponent.textContent */
    get textContent() { return this.element.textContent; }

    /** The setter makes it that you can set it to a value, writableComponent.textContent = "some value" */
    set textContent(v) {
        return this.element.textContent = v;
    }
}