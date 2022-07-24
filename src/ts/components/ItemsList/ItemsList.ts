import { IlistApiObject, IitemApiObjec } from "../../types/i-components.js";
import { getApiItem } from "../../utility/getApiItem.js";
import Component from "../Component/Component.js";
import ItemCard from "../ItemCard/ItemCard.js";

class ItemsList extends Component {
  listApiobject: IlistApiObject;

  constructor(parent: HTMLElement, listApi: IlistApiObject) {
    super(parent, "row row-cols-1 row-cols-md-4 g-4", "div");

    this.listApiobject = listApi;
    this.render();
  }

  render(): void {
    const html: string = `
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="${this.listApiobject.previus}" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item p-2">${this.listApiobject.count}</li>
        <li class="page-item disabled">
          <a class="page-link" href="${this.listApiobject.next}">Next</a>
        </li>
    `;

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

    this.element.innerHTML = html;
  }
}

export default ItemsList;
