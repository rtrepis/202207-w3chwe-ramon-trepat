import IComponent from "../../types/i-components.js";
import Component from "../Component/Component.js";

class ItemCard extends Component implements IComponent {
  constructor(parent: HTMLElement) {
    super(parent, "card mb-3", "div");

    this.render();
  }

  render(): void {
    const html = `
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    `;

    this.element.innerHTML = html;
  }
}

export default ItemCard;
