class Component {
    element;
    constructor(tag) {
        this.element = document.createElement(tag);
    }
    addClass(className) {
        this.element.classList.add(className);
    }
    appendChild(child) {
        this.element.appendChild(child);
    }
    setTextContent(text) {
        this.element.textContent = text;
    }
    render() {
        return this.element;
    }
}
export default Component;
