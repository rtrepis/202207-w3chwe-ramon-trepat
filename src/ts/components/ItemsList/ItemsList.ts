import Component from "../Component/Component.js";
import ItemCard from "../ItemCard/ItemCard.js";
import itemApiObjec from "../../index.js";

class ItemsList extends Component {
  constructor(parent: HTMLElement) {
    super(parent, "row row-cols-1 row-cols-md-4 g-4", "div");

    this.render();
  }

  render(): void {
    this.element.innerHTML = "";

    for (let i = 0; i < 20; i += 1) {
      new ItemCard(this.element, itemApiObjec.name, itemApiObjec.picture);
    }
  }
}

export default ItemsList;
