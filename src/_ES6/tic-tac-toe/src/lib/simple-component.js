export class SimpleComponent {
    /**
     * This class generates a element property containing a NodeElement to be appended into the DOM. This class should be
     * the base of every other component we will create and therefore should also contain its removal from dom.
     * @param selector {String} the selector of the element to be created
     */
    constructor(selector) {
        if (!selector) throw Error('a SimpleComponent must be composed of a selector');
        this.selector = selector.toString();
        this.element = document.createElement(this.selector);
    }

    /** call this when you want to remove the element from the DOM */
    destroy() {
        document.body.removeChild(this.element);
    }
}