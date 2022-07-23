import { IComponent } from "../../types/i-components.js";
import Component from "../Component/Component.js";

class ItemCard extends Component implements IComponent {
  itemName;

  itemImg;

  constructor(parent: HTMLElement, name: string, imgUrl: string) {
    super(parent, "card mb-3", "div");

    this.itemName = name;
    this.itemImg = imgUrl;
    this.render();
  }

  render(): void {
    const html = `
        <img src="${this.itemImg}" class="card-img-top" alt="picture ${this.itemName} pokemon">
        <div class="card-body">
        <h5 class="card-title text-capitalize fs-1 text-center">${this.itemName}</h5>
        <a href="#" class="btn btn-primary fs-6">No implemeted</a>
    `;

    this.element.innerHTML = html;
  }
}

export default ItemCard;
