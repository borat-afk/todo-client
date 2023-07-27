class Component {
  protected element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.element = document.createElement(tag);
  }

  protected addClass(className: string) {
    this.element.classList.add(className);
  }

  protected appendChild(child: HTMLElement) {
    this.element.appendChild(child);
  }

  protected setTextContent(text: string) {
    this.element.textContent = text;
  }

  public render(): HTMLElement {
    return this.element;
  }
}

export default Component;
