import { IComponent } from "../../types/i-components.js";

class Component implements IComponent {
  element: HTMLElement;

  constructor(parent: HTMLElement, className: string, tag = "div") {
    this.element = document.createElement(tag);
    this.element.className = className;

    parent.appendChild(this.element);
  }
}

export default Component;
