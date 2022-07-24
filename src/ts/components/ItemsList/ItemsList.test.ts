import ItemsList from "./ItemsList";

describe("Given a ItemsList component", () => {
  describe("When it's instantiated with a Api list object", () => {
    test("Then is should show 'result' lenght api list", async () => {
      const parent = document.createElement("div");
      const apiListObject = {
        count: 1154,
        next: "https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20",
        previus: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
        results: [
          {
            name: "spearow",
            url: "https://pokeapi.co/api/v2/pokemon/21/",
          },
          {
            name: "fearow",
            url: "https://pokeapi.co/api/v2/pokemon/22/",
          },
        ],
      };
    });
  });
});
