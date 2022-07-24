import ItemsList from "./components/ItemsList/ItemsList.js";
import getApiList from "./utility/getApiList.js";
(async () => {
    const listApi = await getApiList();
    console.log(listApi);
    new ItemsList(document.querySelector(".container"), listApi);
})();
