import ItemsList from "./components/ItemsList/ItemsList.js";
import getApiList from "./utility/getApiList.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

(async () => {
  const listApi = await getApiList(
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  );
  new ItemsList(document.querySelector(".list"), listApi);
})();

export default apiUrl;
