import ItemsList from "./components/ItemsList/ItemsList.js";
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
export const itemApiObjec = {
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
    new ItemsList(document.querySelector(".container"));
})();
export default itemApiObjec;
