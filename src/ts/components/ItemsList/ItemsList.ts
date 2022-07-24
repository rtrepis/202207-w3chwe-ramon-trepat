import { IlistApiObject, IitemApiObjec } from "../../types/i-components.js";
import { getApiItem } from "../../utility/getApiItem.js";
import Component from "../Component/Component.js";
import ItemCard from "../ItemCard/ItemCard.js";

class ItemsList extends Component {
  listApiobject: IlistApiObject;

  constructor(parent: HTMLElement, listApi: IlistApiObject) {
    super(parent, "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3", "div");

    this.listApiobject = listApi;
    this.render();
  }

  render(): void {
    this.listApiobject.results.forEach((porkemon: IitemApiObjec) => {
      (async () => {
        const ItemApi = await getApiItem(porkemon.url);
        new ItemCard(
          this.element,
          ItemApi.name,
          ItemApi.sprites.other.home.front_default
        );
      })();
    });
  }
}

export default ItemsList;
