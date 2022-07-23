import ItemCard from "./ItemCard";

describe("Given a ItemCard component", () => {
  describe("When it receives a name it shows it in titleCart ", () => {
    test("Then is should show 'Pedro' inside a cart-title", () => {
      const component = document.createElement("div");
      const name = "Pedro";

      const itemCard = new ItemCard(component, name, "");
      const cardTitle = itemCard.element.querySelector(".card-title");

      expect(cardTitle.textContent).toBe(name);
    });
  });
});
