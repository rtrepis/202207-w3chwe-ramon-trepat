import { IComponent } from "../../types/i-components.js";
import Component from "../Component/Component.js";

class Pagination extends Component implements IComponent {
  next: string;

  preview: string;

  count: number;

  constructor(
    parent: HTMLElement,
    next: string,
    preview: string,
    count: number
  ) {
    super(parent, "navigationAPP p-3", "nav");

    this.next = next;
    this.preview = preview;
    this.count = count;

    this.render();
  }

  render() {
    const html = `
      <ul class="pagination justify-content-center">
         <li class="page-item disabled">
          <a
            class="page-link"
              href="${this.preview}"
              tabindex="-1"
              aria-disabled="true"
              >Previous</a
            >
          </li>
          <li class="page-item p-2">${this.count}</li>
          <li class="page-item disabled">
          <a class="page-link" href="${this.next}">Next</a>
          </li>  
       </ul>
    `;

    this.element.innerHTML = html;
  }
}

export default Pagination;
