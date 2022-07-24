import { IComponent } from "../../types/i-components.js";
import Component from "../Component/Component.js";

class ItemCard extends Component implements IComponent {
  itemName;

  itemImg;

  constructor(parent: HTMLElement, name: string, imgUrl: string) {
    super(parent, "cols", "div");

    this.itemName = name;
    this.itemImg = imgUrl;
    this.render();
  }

  render(): void {
    const html = `
    <div class="card">
    <img src="${this.itemImg}" class="card-img-top" alt="picture ${this.itemName} pokemon">
    <div class="card-body">
    <h2 class="card-title text-capitalize text-center">${this.itemName}</h2>
    <a href="#" class="btn btn-primary fs-6">No implemeted</a>
    </div>
    `;

    this.element.innerHTML = html;
  }
}

export default ItemCard;
