import Component from "./components/Component/Component.js";
import ItemCard from "./components/ItemCard/ItemCard.js";
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
new Component(document.body, "AppPokemons", "div");
const itemApiObjec = {
    name: "",
    picture: "",
};
const getApiItem = async (id) => {
    const response = await fetch(`${apiUrl}${id}`);
    const data = await response.json();
    itemApiObjec.name = data.name;
    itemApiObjec.picture = data.sprites.other.home.front_default;
    return data;
};
(async () => {
    await getApiItem(1);
    new ItemCard(document.body, itemApiObjec.name, itemApiObjec.picture);
})();
