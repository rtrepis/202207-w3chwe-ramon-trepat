import Component from "./components/Component/Component.js";
import ItemCard from "./components/ItemCard/ItemCard.js";

export const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

new Component(document.body, "AppPokemons", "div");

new ItemCard(document.body, 2);

export default apiUrl;
