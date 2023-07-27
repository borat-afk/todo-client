declare class Component {
    protected element: HTMLElement;
    constructor(tag: keyof HTMLElementTagNameMap);
    protected addClass(className: string): void;
    protected appendChild(child: HTMLElement): void;
    protected setTextContent(text: string): void;
    render(): HTMLElement;
}
export default Component;
